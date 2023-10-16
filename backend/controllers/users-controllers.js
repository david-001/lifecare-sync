import {
  pangeaRegister,
  pangeaLogin,
  pangeaUpdatePassword,
  pangeaGetProfile,
  pangeaUpdateProfile,
} from "../lib/pangea.js";
import { HttpError } from "../lib/http-error.js";
import createUserDb, {
  getUserFromToken,
  setToken,
} from "../db/db-operations.js";

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

    // Check if user entered inputs correctly
    if (!email || !password || password !== password_confirmation) {
      const error = new HttpError(
        "Please fill out all fields and make sure that passwords match.",
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
        email,
        password,
        next
      );
      // Create user in database
      await createUserDb(createResp.result.id, createResp.result.email, next);
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not register.",
        500
      );
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

    res.status(201).json({ userId: user.userId, token: null });
  };

  // Update password
  updatePassword = async (req, res, next) => {
    const { token, password_initial, password_update } = req.body;
    let passUpdateResp;
    try {
      passUpdateResp = await pangeaUpdatePassword(
        token,
        password_initial,
        password_update,
        next
      );
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not update password.",
        500
      );
      return next(error);
    }

    res.status(201).json({ result: passUpdateResp.result });
  };

  // Get profile
  getProfile = async (req, res, next) => {
    let resp;

    try {
      const user = await getUserFromToken(req.token, next);
      resp = await pangeaGetProfile(user.userId, next);
    } catch (err) {
      next(err);
    }

    res
      .status(201)
      .json({ email: resp.result.email, profile: resp.result.profile });
  };

  updateProfile = async (req, res, next) => {
    const { first_name, last_name, phone, email } = req.body;

    try {
      const user = await getUserFromToken(req.token, next);
      await pangeaUpdateProfile(user.email, {
        first_name,
        last_name,
        phone,
        email,
      });
    } catch (err) {
      next(err);
    }

    res.status(201).json({ response: "Successfully updated profile" });
  };
}
