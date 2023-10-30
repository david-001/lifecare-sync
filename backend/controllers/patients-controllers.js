import { HttpError } from "../lib/http-error.js";
import {
  getPatientsByUserIdDb,
  getPatientDb,
  createPatientDb,
  updatePatientDb,
  deletePatientDb,
  getUserFromToken,
} from "../db/db-operations.js";
import { validateName } from "../lib/validation.js";
import { pangeaAudit } from "../lib/pangea.js";
import fs from "fs";
import { isValidNumber } from "libphonenumber-js";

export default class PatientsController {
  constructor() {}

  // Get a specific patient
  getPatient = async (req, res, next) => {
    const patientId = req.params.pid;
    let patient;
    let user;

    try {
      user = await getUserFromToken(req.token);
      patient = await getPatientDb(patientId);

      // Audit
      await pangeaAudit(
        user.email,
        "Accessed Patient Records",
        "Success",
        `${user.email} accessed ${patient.first_name} ${patient.last_name} records`,
        req
      );
    } catch (err) {
      return next(err);
    }

    res.status(201).json({ patient: patient });
  };

  // Get patients for specific user
  getPatientsByUserId = async (req, res, next) => {
    // Db operation
    let user;
    let user_patients;

    try {
      user = await getUserFromToken(req.token);
      user_patients = await getPatientsByUserIdDb(user.userId);

      // Audit
      await pangeaAudit(
        user.email,
        "Accessed Patient Records",
        "Success",
        `${user.email} accessed ${user.patients.length} patient records`,
        req
      );
    } catch (err) {
      return next(err);
    }

    res.status(201).json({
      patients: user_patients.patients.map((patient) => patient.toObject()),
    });
  };

  // Create a new patient method
  createPatient = async (req, res, next) => {
    const {
      first_name,
      last_name,
      age,
      contact,
      emergency_contact,
      pre_existing_conditions,
      symptoms,
      diagnosis,
      treatment,
      medication,
      comments,
    } = req.body;

    let image;
    req.file ? (image = req.file.path) : (image = null);

    if (!first_name || !last_name || !age) {
      return next(
        new HttpError(
          "Please ensure that the First Name, Last Name and Age are filled out.",
          422
        )
      );
    }

    // Validation
    if (!validateName(first_name)) {
      const error = new HttpError(
        "Please ensure that the First Name field contains only letters.",
        422
      );
      return next(error);
    }
    if (!validateName(last_name)) {
      const error = new HttpError(
        "Please ensure that the Last Name field contains only letters.",
        422
      );
      return next(error);
    }

    if (contact) {
      if (!isValidNumber(contact)) {
        const error = new HttpError(
          "Please ensure that the Contact Tel. is valid. Example +12133734253 or +1 213 373 4253",
          422
        );
        return next(error);
      }
    }

    if (emergency_contact) {
      if (!isValidNumber(emergency_contact)) {
        const error = new HttpError(
          "Please ensure that the Emergency Contact Tel. is valid. Example +12133734253 or +1 213 373 4253",
          422
        );
        return next(error);
      }
    }

    // Db operations
    let user;
    try {
      user = await getUserFromToken(req.token);
      await createPatientDb(
        first_name,
        last_name,
        age,
        image,
        contact,
        emergency_contact,
        pre_existing_conditions,
        symptoms,
        diagnosis,
        treatment,
        medication,
        comments,
        user
      );

      // Audit
      await pangeaAudit(
        user.email,
        `New Patient ${first_name} ${last_name} Created`,
        "Success",
        `${user.email} created new patient record.`,
        req
      );
    } catch (err) {
      return next(err);
    }

    res.status(201).json({ response: "Successfully created patient." });
  };

  // Update a patient method
  updatePatient = async (req, res, next) => {
    const {
      first_name,
      last_name,
      age,
      contact,
      emergency_contact,
      pre_existing_conditions,
      symptoms,
      diagnosis,
      treatment,
      medication,
      comments,
    } = req.body;

    if (!first_name || !last_name || !age) {
      return next(
        new HttpError(
          "Please ensure that the First Name, Last Name and Age are filled out.",
          422
        )
      );
    }

    // Validation
    if (!validateName(first_name)) {
      const error = new HttpError(
        "Please ensure that the First Name field contains only letters.",
        422
      );
      return next(error);
    }
    if (!validateName(last_name)) {
      const error = new HttpError(
        "Please ensure that the Last Name field contains only letters.",
        422
      );
      return next(error);
    }

    if (contact) {
      if (!isValidNumber(contact)) {
        const error = new HttpError(
          "Please ensure that the Contact Tel. is valid. Example +12133734253 or +1 213 373 4253",
          422
        );
        return next(error);
      }
    }

    if (emergency_contact) {
      if (!isValidNumber(emergency_contact)) {
        const error = new HttpError(
          "Please ensure that the Emergency Contact Tel. is valid. Example +12133734253 or +1 213 373 4253",
          422
        );
        return next(error);
      }
    }

    const patientId = req.params.pid;
    let image;
    req.file ? (image = req.file.path) : (image = null);

    // Db operations
    let user;
    let patient;

    try {
      user = await getUserFromToken(req.token);
      patient = await getPatientDb(patientId);

      // Audit
      await pangeaAudit(
        user.email,
        `Updated Patient record ${first_name} ${last_name}`,
        "Success",
        `${user.email} updated patient record.`,
        req
      );
    } catch (err) {
      return next(err);
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
        first_name,
        last_name,
        age,
        image,
        contact,
        emergency_contact,
        pre_existing_conditions,
        symptoms,
        diagnosis,
        treatment,
        medication,
        comments,
        patient
      );
    } catch (err) {
      return next(err);
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
      patient = await getPatientDb(patientId);
      user = await getUserFromToken(req.token);
      await deletePatientDb(patient);

      // Audit
      await pangeaAudit(
        user.email,
        `Deleted Patient record ${patient.first_name} ${patient.last_name}`,
        "Success",
        `${user.email} deleted new patient record.`,
        req
      );
    } catch (err) {
      return next(err);
    }

    if (patient.image) {
      fs.unlink(patient.image, (err) => {
        console.log(err);
      });
    }

    res.status(200).json({ message: "Deleted patient." });
  };
}
