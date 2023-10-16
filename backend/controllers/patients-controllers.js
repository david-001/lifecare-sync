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
    const patientId = req.params.pid;
    let patient;
    let user;

    try {
      user = await getUserFromToken(req.token, next);
      patient = await getPatientDb(patientId, next);

      // Audit
      await pangeaAudit(
        user.email,
        "Accessed Patient Records",
        "Success",
        `${user.email} accessed ${patient.name} records`,
        req,
        next
      );
    } catch (err) {
      next(err);
    }

    res.status(201).json({ patient: patient });
  };

  // Get patients for specific user
  getPatientsByUserId = async (req, res, next) => {
    // Db operation
    let user;
    let user_patients;

    try {
      user = await getUserFromToken(req.token, next);
      user_patients = await getPatientsByUserIdDb(user.userId, next);

      // Audit
      await pangeaAudit(
        user.email,
        "Accessed Patient Records",
        "Success",
        `${user.email} accessed ${user.patients.length} patient records`,
        req,
        next
      );
    } catch (err) {
      next(err);
    }

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
    let user;
    try {
      user = await getUserFromToken(req.token, next);
      await createPatientDb(
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

      // Audit
      await pangeaAudit(
        user.email,
        `New Patient ${name} Created`,
        "Success",
        `${user.email} created new patient record.`,
        req,
        next
      );
    } catch (err) {
      next(err);
    }

    res.status(201).json({ response: "Successfully created patient." });
  };

  // Update a patient method
  updatePatient = async (req, res, next) => {
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

    if (!name || !age || !contact || !emergency_contact) {
      return next(
        new HttpError(
          "Please ensure that the Name, age, contact and emergency contact are filled out.",
          422
        )
      );
    }

    const patientId = req.params.pid;
    let image;
    req.file ? (image = req.file.path) : (image = null);

    // Db operations
    let user;
    let patient;

    try {
      user = await getUserFromToken(req.token, next);
      patient = await getPatientDb(patientId, next);

      // Audit
      await pangeaAudit(
        user.email,
        `Updated Patient record ${name}`,
        "Success",
        `${user.email} updated patient record.`,
        req,
        next
      );
    } catch (err) {
      next(err);
    }

    // Delete old image
    if (patient.image && image) {
      fs.unlink(patient.image, (err) => {
        console.log(err);
      });
    }

    if (!image) {
      image = patient.image;
    }

    try {
      await updatePatientDb(
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
        patient
      );
    } catch (err) {
      next(err);
    }

    res.status(201).json({ response: "Successfully updated patient." });
  };

  // Delete a patient method
  deletePatient = async (req, res, next) => {
    const patientId = req.params.pid;

    // Db operations
    let patient;
    let user;

    try {
      patient = await getPatientDb(patientId, next);
      user = await getUserFromToken(req.token, next);
      await deletePatientDb(patient, next);

      // Audit
      await pangeaAudit(
        user.email,
        `Deleted Patient record ${patient.name}`,
        "Success",
        `${user.email} deleted new patient record.`,
        req,
        next
      );
    } catch (err) {
      next(err);
    }

    // if (!patient) {
    //   const error = new HttpError("Could not find patient for this id.", 404);
    //   return next(error);
    // }

    if (patient.image) {
      fs.unlink(patient.image, (err) => {
        console.log(err);
      });
    }

    res.status(200).json({ message: "Deleted patient." });
  };
}
