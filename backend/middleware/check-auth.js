import { HttpError } from "../lib/http-error.js";

const checkAuth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.body.token;
    if (!token) {
      throw new Error("Authentication failed!");
    }
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};

export default checkAuth;
