import express from "express";
// import PatientsController from "../../controllers/patients-controllers.js";
// import checkAuth from "../../middleware/check-auth.js";
// import fileUpload from "../../middleware/file-upload.js";
import PatientsController from "../controllers/patients-controllers.js";
import checkAuth from "../middleware/check-auth.js";
import fileUpload from "../middleware/file-upload.js";

export default class PatientsRoutes {
  constructor() {
    this.patientsController = new PatientsController();
    this.router = express.Router();
    this.router.use(checkAuth);

    this.router.get("/fetch/:pid", this.patientsController.getPatient);
    this.router.get("/fetchall", this.patientsController.getPatientsByUserId);
    this.router.post(
      "/new",
      fileUpload.single("image"),
      this.patientsController.createPatient
    );
    this.router.patch(
      "/update/:pid",
      fileUpload.single("image"),
      this.patientsController.updatePatient
    );
    this.router.delete("/delete/:pid", this.patientsController.deletePatient);
  }
}
