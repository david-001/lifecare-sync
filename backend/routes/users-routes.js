import express from "express";
import UsersController from "../controllers/users-controllers.js";
import checkAuth from "../middleware/check-auth.js";

export default class UsersRoutes {
  constructor() {
    this.usersController = new UsersController();
    this.router = express.Router();
    this.router.post("/register", this.usersController.register);
    this.router.post("/login", this.usersController.login);
    this.router.patch(
      "/updatepassword",
      checkAuth,
      this.usersController.updatePassword
    );
    this.router.get(
      "/profile/:userId",
      checkAuth,
      this.usersController.getProfile
    );
  }
}
