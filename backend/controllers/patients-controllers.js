import { HttpError } from "../lib/http-error.js";
import {
  getUserDb,
  getPatientsByUserIdDb,
  getPatientDb,
  createPatientDb,
  updatePatientDb,
  deletePatientDb,
  getUserFromToken,
} from "../db/db-operations.js";
import { pangeaAudit } from "../lib/pangea.js";
import fs from "fs";

export default class PatientsController {
  constructor() {}

  // Get a specific patient
  getPatient = async (req, res, next) => {
    const user = getUserFromToken(req.token, next);
    const patientId = req.params.pid;

    // Db operations
    // const user = await getUserDb(userId, next);
    const patient = await getPatientDb(patientId, next);

    // Audit
    await pangeaAudit(
      user.email,
      "Accessed Patient Records",
      "Success",
      `${user.email} accessed ${patient.name} records`,
      req,
      next
    );

    res.status(201).json({ patient: patient });
  };

  // Get patients for specific user
  getPatientsByUserId = async (req, res, next) => {
    // Db operation
    const user = await getUserFromToken(req.token, next);
    const user_patients = await getPatientsByUserIdDb(user.userId, next);

    // Audit
    await pangeaAudit(
      user.email,
      "Accessed Patient Records",
      "Success",
      `${user.email} accessed ${user.patients.length} patient records`,
      req,
      next
    );

    res.status(201).json({
      patients: user_patients.patients.map((patient) => patient.toObject()),
    });
  };

  // Create a new patient method
  createPatient = async (req, res, next) => {
    const {
      name,
      age,
      contact,
      emergency_contact,
      pre_existing_conditions,
      diagnosis,
      treatment,
      medication,
      comments,
    } = req.body;

    // const userId = req.params.userId;
    if (!req) {
      return next(new HttpError("Request Error", 422));
    }

    let image;
    req.file ? (image = req.file.path) : (image = null);

    if (!name || !age || !contact || !emergency_contact) {
      return next(
        new HttpError(
          "Please ensure that the Name, age, contact and emergency contact are filled out.",
          422
        )
      );
    }

    // Db operations
    const user = await getUserFromToken(req.token, next);

    const createdPatient = await createPatientDb(
      name,
      age,
      image,
      contact,
      emergency_contact,
      pre_existing_conditions,
      diagnosis,
      treatment,
      medication,
      comments,
      user,
      next
    );
    // console.log("createdPatient", createdPatient);

    // Audit
    await pangeaAudit(
      user.email,
      `New Patient ${name} Created`,
      "Success",
      `${user.email} created new patient record.`,
      req,
      next
    );

    res.status(201).json({ patient: createdPatient });
  };

  // Update a patient method
  updatePatient = async (req, res, next) => {
    const {
      name,
      age,
      blood_type,
      emergency_contact,
      pre_conditions,
      current_condition,
      treatment,
      medicine,
    } = req.body;

    if (!name || !age) {
      return next(
        new HttpError(
          "Please ensure that the Name and Age are filled out.",
          422
        )
      );
    }

    const patientId = req.params.pid;

    // Db operations
    const user = await getUserFromToken(req.token, next);
    const patient = await getPatientDb(patientId, next);

    if (patient.owner.toString() !== user._id) {
      const error = new HttpError(
        "You are not allowed to edit this patient.",
        401
      );
      return next(error);
    }

    // Db operation
    await updatePatientDb(
      name,
      age,
      blood_type,
      emergency_contact,
      pre_conditions,
      current_condition,
      treatment,
      medicine,
      patient,
      next
    );

    // Audit
    await pangeaAudit(
      user.email,
      `Updated Patient record ${name}`,
      "Success",
      `${user.email} updated patient record.`,
      req,
      next
    );
  };

  // Delete a patient method
  deletePatient = async (req, res, next) => {
    const patientId = req.params.pid;

    // Db operations
    const patient = await getPatientDb(patientId, next);
    const user = await getUserFromToken(req.token, next);

    if (!patient) {
      const error = new HttpError("Could not find patient for this id.", 404);
      return next(error);
    }

    if (patient.owner !== user._id) {
      const error = new HttpError(
        "You are not allowed to delete this patient.",
        401
      );
      return next(error);
    }

    // Db operation
    await deletePatientDb(patient, next);

    fs.unlink(imagePath, (err) => {
      console.log(err);
    });

    // Audit
    await pangeaAudit(
      user.email,
      `Deleted Patient record ${patient.name}`,
      "Success",
      `${user.email} deleted new patient record.`,
      req,
      next
    );

    res.status(200).json({ message: "Deleted patient." });
  };
}
