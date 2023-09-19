import express from "express";
import PatientsController from "../controllers/patients-controllers.js";
import checkAuth from "../middleware/check-auth.js";

export default class PatientsRoutes {
  constructor() {
    this.patientsController = new PatientsController();
    this.router = express.Router();
    this.router.get(
      "/getpatients/:userId",
      checkAuth,
      this.patientsController.getPatientsByUserId
    );
    this.router.post(
      "/newpatient/:userId",
      checkAuth,
      this.patientsController.createPatient
    );
    this.router.patch(
      "/updatepatient/:userId/:pid",
      checkAuth,
      this.patientsController.updatePatient
    );
  }
}
