import {
  pangeaRegister,
  pangeaLogin,
  pangeaUpdatePassword,
  pangeaGetProfile,
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

    // Create new user
    const createResp = await pangeaRegister(
      first_name,
      last_name,
      phone,
      email,
      password,
      next
    );

    // Create user in database
    await createUserDb(createResp.result.id, createResp.result.email, next);

    res.status(201).json({ createResp: createResp.result });
  };

  // Login
  login = async (req, res, next) => {
    const { email, password } = req.body;
    const loginResp = await pangeaLogin(email, password, next);
    const userId = loginResp.result.active_token.identity;
    const token = loginResp.result.active_token.token;
    const expire = loginResp.result.active_token.expire;

    await setToken(userId, token, next);

    res.status(201).json({ userId: userId, token: token, expire: expire });
  };

  // Logout
  logout = async (req, res, next) => {
    const user = await getUserFromToken(req.token, next);
    await setToken(user.userId, null, next);

    res.status(201).json({ userId: user.userId, token: null });
  };

  // Update password
  updatePassword = async (req, res, next) => {
    const { token, password_initial, password_update } = req.body;
    const passUpdateResp = await pangeaUpdatePassword(
      token,
      password_initial,
      password_update,
      next
    );
    res.status(201).json({ result: passUpdateResp.result });
  };

  // Get profile
  getProfile = async (req, res, next) => {
    const user = await getUserFromToken(req.token, next);
    const resp = await pangeaGetProfile(user.userId, next);
    res.status(201).json({ result: resp.result.profile });
  };
}
