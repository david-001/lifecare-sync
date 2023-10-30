import {
  pangeaRegister,
  pangeaLogin,
  pangeaUpdatePassword,
  pangeaGetProfile,
  pangeaUpdateProfile,
} from "../lib/pangea.js";
import { HttpError } from "../lib/http-error.js";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../lib/validation.js";
import createUserDb, {
  getUserFromToken,
  setToken,
} from "../db/db-operations.js";
import fs from "fs";
import { isValidNumber } from "libphonenumber-js";

export default class UsersController {
  constructor() {}

  // Register
  register = async (req, res, next) => {
    const {
      first_name,
      last_name,
      phone,
      email,
      password,
      password_confirmation,
    } = req.body;

    let image;
    req.file ? (image = req.file.path) : (image = "");

    // Check if all fields are filled out and passwords match
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      password !== password_confirmation
    ) {
      const error = new HttpError(
        "Please fill out all fields and make sure that passwords match.",
        422
      );
      return next(error);
    }

    // Validation
    if (!validateName(first_name)) {
      const error = new HttpError(
        "Please ensure that the First Name field contains only letters.",
        422
      );
      return next(error);
    }
    if (!validateName(last_name)) {
      const error = new HttpError(
        "Please ensure that the Last Name field contains only letters.",
        422
      );
      return next(error);
    }

    if (phone) {
      if (!isValidNumber(phone)) {
        const error = new HttpError(
          "Please ensure that the phone number is valid. Example +12133734253 or +1 213 373 4253",
          422
        );
        return next(error);
      }
    }

    if (!validateEmail(email)) {
      const error = new HttpError(
        "Please ensure that the email is valid. Example example@email.com",
        422
      );
      return next(error);
    }

    if (!validatePassword(password)) {
      const error = new HttpError(
        `
          Please ensure that your password contains:
          At least one digit (0-9).
          At least one lowercase letter (a-z).
          At least one uppercase letter (A-Z).
          At least one of the specified special characters (@, #, $, %, ^, &, +, =, !).
          A minimum length of 8 characters`,
        422
      );
      return next(error);
    }

    let createResp;
    try {
      // Create new user
      createResp = await pangeaRegister(
        first_name,
        last_name,
        phone,
        image,
        email,
        password
      );

      // Create user in database
      await createUserDb(createResp.result.id);
    } catch (err) {
      let error;
      if (err.response.status === "UserExists") {
        error = new HttpError(
          "There is a already a user with this email. Please use a different email address.",
          422
        );
      } else {
        error = new HttpError("Something went wrong, could not register.", 500);
      }
      return next(error);
    }

    res.status(201).json({ createResp: createResp.result });
  };

  // Login
  login = async (req, res, next) => {
    const { email, password } = req.body;
    let userId;
    let userName;
    let token;
    let expire;

    try {
      const loginResp = await pangeaLogin(email, password, next);
      userId = loginResp.result.active_token.identity;
      userName = `${loginResp.result.active_token.profile.first_name} ${loginResp.result.active_token.profile.last_name}`;
      token = loginResp.result.active_token.token;
      expire = loginResp.result.active_token.expire;
      await setToken(userId, token, next);
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not login.",
        500
      );
      return next(error);
    }

    res.status(201).json({
      userId: userId,
      userName: userName,
      token: token,
      expire: expire,
    });
  };

  // Logout
  logout = async (req, res, next) => {
    let user;

    try {
      user = await getUserFromToken(req.token, next);
      await setToken(user.userId, null, next);
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not login.",
        500
      );
      return next(error);
    }

    res.status(201).json({ response: "Successfully logged out." });
  };

  // Update password
  updatePassword = async (req, res, next) => {
    const { password_initial, password_update } = req.body;
    if (!validatePassword(password_update)) {
      const error = new HttpError(
        `
          Please ensure that your password contains:
          At least one digit (0-9).
          At least one lowercase letter (a-z).
          At least one uppercase letter (A-Z).
          At least one of the specified special characters (@, #, $, %, ^, &, +, =, !).
          A minimum length of 8 characters`,
        422
      );
      return next(error);
    }

    let passUpdateResp;
    try {
      passUpdateResp = await pangeaUpdatePassword(
        req.token,
        password_initial,
        password_update
      );
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not update password. Your initial password is incorrect.",
        500
      );
      return next(error);
    }
    res.status(201).json({ result: passUpdateResp.summary });
  };

  // Get profile
  getProfile = async (req, res, next) => {
    let resp;

    try {
      const user = await getUserFromToken(req.token);
      if (!user) {
        const error = new HttpError(
          "Error retrieving user from database.",
          422
        );
        return next(error);
      }
      resp = await pangeaGetProfile(user.userId);
    } catch (err) {
      return next(err);
    }

    res
      .status(201)
      .json({ email: resp.result.email, profile: resp.result.profile });
  };

  updateProfile = async (req, res, next) => {
    const { first_name, last_name, phone, email, old_image } = req.body;
    let image;
    req.file ? (image = req.file.path) : (image = "");

    // Check if user entered inputs correctly
    if (!first_name || !last_name) {
      const error = new HttpError(
        "Please fill out all fields and make sure that passwords match.",
        422
      );
      return next(error);
    }

    // Validation
    if (!validateName(first_name)) {
      const error = new HttpError(
        "Please ensure that the First Name field contains only letters.",
        422
      );
      return next(error);
    }
    if (!validateName(last_name)) {
      const error = new HttpError(
        "Please ensure that the Last Name field contains only letters.",
        422
      );
      return next(error);
    }

    if (phone) {
      if (!isValidNumber(phone)) {
        const error = new HttpError(
          "Please ensure that the phone number is valid. Example +12133734253 or +1 213 373 4253",
          422
        );
        return next(error);
      }
    }

    // Delete old image
    if (old_image && image) {
      fs.unlink(old_image, (err) => {
        console.log(err);
      });
    }

    if (!image) {
      image = old_image;
    }

    try {
      await pangeaUpdateProfile(email, {
        first_name,
        last_name,
        phone,
        image,
      });
    } catch (err) {
      return next(err);
    }

    res.status(201).json({ response: "Successfully updated profile" });
  };
}
