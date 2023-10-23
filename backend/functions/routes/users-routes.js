import express from "express";
// import UsersController from "../../controllers/users-controllers.js";
// import checkAuth from "../../middleware/check-auth.js";
// import fileUpload from "../../middleware/file-upload.js";

import UsersController from "../controllers/users-controllers.js";
import checkAuth from "../middleware/check-auth.js";
import fileUpload from "../middleware/file-upload.js";

export default class UsersRoutes {
  constructor() {
    this.usersController = new UsersController();
    this.router = express.Router();
    this.router.post(
      "/register",
      fileUpload.single("image"),
      this.usersController.register
    );
    this.router.post("/login", this.usersController.login);
    this.router.post("/logout", checkAuth, this.usersController.logout);
    this.router.patch(
      "/updatepassword",
      checkAuth,
      this.usersController.updatePassword
    );
    this.router.get("/profile", checkAuth, this.usersController.getProfile);
    this.router.patch(
      "/updateprofile",
      checkAuth,
      fileUpload.single("image"),
      this.usersController.updateProfile
    );
  }
}
