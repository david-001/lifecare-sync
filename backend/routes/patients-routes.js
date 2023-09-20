import express from "express";
import PatientsController from "../controllers/patients-controllers.js";
import checkAuth from "../middleware/check-auth.js";

export default class PatientsRoutes {
  constructor() {
    this.patientsController = new PatientsController();
    this.router = express.Router();
    this.router.get(
      "/fetch/:userId/:pid",
      checkAuth,
      this.patientsController.getPatient
    );
    this.router.get(
      "/fetchall/:userId",
      checkAuth,
      this.patientsController.getPatientsByUserId
    );
    this.router.post(
      "/new/:userId",
      checkAuth,
      this.patientsController.createPatient
    );
    this.router.patch(
      "/update/:userId/:pid",
      checkAuth,
      this.patientsController.updatePatient
    );
    this.router.delete(
      "/delete/:userId/:pid",
      checkAuth,
      this.patientsController.deletePatient
    );
  }
}
