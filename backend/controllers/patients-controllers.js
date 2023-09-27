import mongoose from "mongoose";
import { HttpError } from "../lib/http-error.js";
import { User } from "../models/user.js";
import { Patient } from "../models/patient.js";
import {
  token,
  config,
  clientIpAddress,
  hostIpAddress,
} from "../lib/pangea.js";
import { AuditService } from "pangea-node-sdk";
import fs from "fs";

const audit = new AuditService(token, config);

export default class PatientsController {
  constructor() {}

  // Get a specific patient
  getPatient = async (req, res, next) => {
    const userId = req.params.userId;
    const patientId = req.params.pid;

    let user;
    try {
      user = await User.findOne({ userId: userId });
    } catch (err) {
      return next(err);
    }

    let patient;
    try {
      patient = await Patient.findById(patientId);
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not find patient.",
        500
      );
      return next(error);
    }

    // Audit
    try {
      await audit.log(
        {
          actor: user.email,
          action: "Accessed Patient Records",
          status: "Success",
          target: `${hostIpAddress(req)}`,
          source: `${clientIpAddress(req)}`,
          message: `${user.email} accessed ${patient.name} records`,
        },
        { verbose: true }
      );
    } catch (err) {
      return next(err);
    }

    res.status(201).json({ patient: patient });
  };

  // Get patients for specific user
  getPatientsByUserId = async (req, res, next) => {
    const userId = req.params.userId;
    const patientId = req.params.pid;

    let user;
    try {
      user = await User.findOne({ userId: userId }).populate("patients");
    } catch (err) {
      return next(err);
    }

    // Audit
    try {
      await audit.log(
        {
          actor: user.email,
          action: "Accessed Patient Records",
          status: "Success",
          target: `${hostIpAddress(req)}`,
          source: `${clientIpAddress(req)}`,
          message: `${user.email} accessed ${user.patients.length} patient records`,
        },
        { verbose: true }
      );
    } catch (err) {
      return next(err);
    }

    res.status(201).json({
      patients: user.patients.map((patient) => patient.toObject()),
    });
  };

  // Create a new patient method
  createPatient = async (req, res, next) => {
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

    let image;
    req.file ? (image = req.file.path) : (image = null);

    if (!name || !age) {
      return next(
        new HttpError(
          "Please ensure that the Name and Age are filled out.",
          422
        )
      );
    }

    // Get user
    let user;
    try {
      user = await User.findOne({ userId: req.params.userId });
    } catch (err) {
      const error = new HttpError(
        "Creating patient failed, please try again.",
        500
      );
      return next(error);
    }

    // Create patient for user
    const createdPatient = new Patient({
      name,
      age,
      image,
      blood_type,
      emergency_contact,
      pre_conditions,
      current_condition,
      treatment,
      medicine,
      owner: user._id,
    });
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdPatient.save({ session: sess });
      user.patients.push(createdPatient);
      await user.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      console.log(err);
      const error = new HttpError(
        "Creating patient failed, please try again.",
        500
      );
      return next(error);
    }

    // Audit
    try {
      await audit.log({
        actor: user.email,
        action: `New Patient ${name} Created`,
        status: "Success",
        target: `${hostIpAddress(req)}`,
        source: `${clientIpAddress(req)}`,
        message: `${user.email} created new patient record.`,
      });
    } catch (err) {
      return next(err);
    }

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

    const userId = req.params.userId;
    const patientId = req.params.pid;
    let patient;
    try {
      patient = await Patient.findById(patientId);
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not update patient.",
        500
      );
      return next(error);
    }

    // Get user
    let user;
    try {
      user = await User.findOne({ userId: userId });
    } catch (err) {
      const error = new HttpError(
        "Creating patient failed, please try again.",
        500
      );
      return next(error);
    }

    if (patient.owner.toString() !== user._id) {
      const error = new HttpError(
        "You are not allowed to edit this patient.",
        401
      );
      return next(error);
    }

    //Update patient
    patient.name = name;
    patient.age = age;
    patient.blood_type = blood_type;
    patient.emergency_contact = emergency_contact;
    patient.pre_conditions = pre_conditions;
    patient.current_condition = current_condition;
    patient.treatment = treatment;
    patient.medicine = medicine;

    try {
      await patient.save();
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not update patient.",
        500
      );
      return next(error);
    }

    // Audit
    try {
      await audit.log({
        actor: user.email,
        action: `Updated Patient record ${name}`,
        status: "Success",
        target: `${hostIpAddress(req)}`,
        source: `${clientIpAddress(req)}`,
        message: `${user.email} updated patient record.`,
      });
    } catch (err) {
      return next(err);
    }
  };

  // Delete a patient method
  deletePatient = async (req, res, next) => {
    const patientId = req.params.pid;
    const userId = req.params.userId;

    let patient;
    try {
      patient = await Patient.findById(patientId).populate("owner");
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not delete patient.",
        500
      );
      return next(error);
    }

    if (!patient) {
      const error = new HttpError("Could not find patient for this id.", 404);
      return next(error);
    }

    // Get user
    let user;
    try {
      user = await User.findOne({ userId: userId });
    } catch (err) {
      const error = new HttpError(
        "Creating patient failed, please try again.",
        500
      );
      return next(error);
    }

    if (patient.owner !== user._id) {
      const error = new HttpError(
        "You are not allowed to delete this patient.",
        401
      );
      return next(error);
    }

    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await patient.remove({ session: sess });
      patient.owner.patients.pull(patient);
      await patient.owner.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not delete patient.",
        500
      );
      return next(error);
    }

    fs.unlink(imagePath, (err) => {
      console.log(err);
    });

    // Audit
    try {
      await audit.log({
        actor: user.email,
        action: `Deleted Patient record ${patient.name}`,
        status: "Success",
        target: `${hostIpAddress(req)}`,
        source: `${clientIpAddress(req)}`,
        message: `${user.email} deleted new patient record.`,
      });
    } catch (err) {
      return next(err);
    }

    res.status(200).json({ message: "Deleted patient." });
  };
}
