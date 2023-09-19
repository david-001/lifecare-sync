import { AuthNService, AuthN } from "pangea-node-sdk";
import { token, config } from "../lib/pangea.js";

import { HttpError } from "../lib/http-error.js";
import { User } from "../models/user.js";

const authn = new AuthNService(token, config);

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

    // Create new user
    try {
      const createResp = await authn.user.create(
        email,
        password,
        AuthN.IDProvider.PASSWORD,
        {
          profile: {
            first_name: first_name,
            last_name: last_name,
            phone: phone,
          },
        }
      );
      // console.log("Create user success. Result: ", createResp.result);

      // Create user in database
      try {
        const createdUser = new User({
          userId: createResp.result.id,
          email: createResp.result.email,
        });
        await createdUser.save();
      } catch (err) {
        return next(err);
      }
      res.status(201).json({
        createResp: createResp.result,
      });
    } catch (err) {
      return next(err);
    }
  };

  // Login
  login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const loginResp = await authn.user.login.password(email, password);
      // console.log("Login success. Result: ", loginResp.result.active_token);
      res.status(201).json({ result: loginResp.result.active_token });
    } catch (err) {
      return next(err);
    }
  };

  // Update password
  updatePassword = async (req, res, next) => {
    const { token, password_initial, password_update } = req.body;
    try {
      const passUpdateResp = await authn.client.password.change(
        token,
        password_initial,
        password_update
      );
      // console.log("Update user password success.", passUpdateResp);
      res.status(201).json({ result: passUpdateResp.result });
    } catch (err) {
      return next(err);
    }
  };

  // Update profile
  updateProf = async (req, res, next) => {
    const { email, first_name, last_name, phone, patients } = req.body;
    try {
      const updateResp = await authn.user.profile.update({
        email: email,
        profile: {
          first_name: first_name,
          last_name: last_name,
          phone: phone,
        },
      });
      console.log(
        "Update profile success. Current profile: ",
        updateResp.result.profile
      );
      res.status(201).json({ result: updateResp.result.profile });
    } catch (err) {
      return next(err);
    }
  };

  // getProfByEmail = async (email) => {
  //   let getResp = null;
  //   try {
  //     getResp = await authn.user.profile.getProfile({ email: email });
  //     return getResp.result.profile;
  //   } catch (err) {
  //     return next(err);
  //   }
  // };

  // listUsers = async (req, res, next) => {
  //   // const { email, profile } = req.body;
  //   try {
  //     console.log("\n\nList users...");
  //     const listResp2 = await authn.user.list({});
  //     console.log(`List users success. ${listResp2.result.users.length} `);
  //     res.status(201).json({ result: listResp2.result.users });
  //   } catch (err) {
  //     return next(err);
  //   }
  // };

  // deleteUser = async (req, res, next) => {
  //   const { email } = req.body;
  //   try {
  //     console.log("\n\nDelete user...");
  //     const deleteResp = await authn.user.delete({ email: email });
  //     console.log("Delete user success.");
  //     res.status(201).json({ result: deleteResp });
  //   } catch (err) {
  //     return next(err);
  //   }
  // };
}
