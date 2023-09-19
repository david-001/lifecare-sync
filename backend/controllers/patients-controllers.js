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

const audit = new AuditService(token, config);

export default class PatientsController {
  constructor() {}

  // Get patients for specific user
  getPatientsByUserId = async (req, res, next) => {
    const userId = req.params.userId;

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
          message: `'${user.email}' accessed patient records.`,
        },
        { verbose: true }
      );
    } catch (err) {
      return next(err);
    }

    res.status(201).json({
      patients: user.patients.map((patient) =>
        patient.toObject({ getters: true })
      ),
    });
  };

  // Create a new patient
  createPatient = async (req, res, next) => {
    const {
      name,
      age,
      blood_type,
      emergency_contact,
      pre_conditions,
      current_condition,
      treatment,
    } = req.body;

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
      blood_type,
      emergency_contact,
      pre_conditions,
      current_condition,
      treatment,
      owner: user._id,
      doctors: user._id,
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
        action: "New Patient Created",
        status: "Success",
        target: `${hostIpAddress(req)}`,
        source: `${clientIpAddress(req)}`,
        message: `'${user.email}' created new patient record.`,
      });
    } catch (err) {
      return next(err);
    }

    res.status(201).json({ patient: createdPatient });
  };

  // Update a patient
  updatePatient = async (req, res, next) => {
    const {
      name,
      age,
      blood_type,
      emergency_contact,
      pre_conditions,
      current_condition,
      treatment,
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
        "Something went wrong, could not update place.",
        500
      );
      return next(error);
    }

    if (patient.owner.toString() !== userId) {
      const error = new HttpError(
        "You are not allowed to edit this place.",
        401
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

    //Update patient
    patient.name = name;
    patient.age = age;
    patient.blood_type = blood_type;
    patient.emergency_contact = emergency_contact;
    patient.pre_conditions = pre_conditions;
    patient.current_condition = current_condition;
    patient.treatment = treatment;

    try {
      await patient.save();
    } catch (err) {
      const error = new HttpError(
        "Something went wrong, could not update place.",
        500
      );
      return next(error);
    }

    // Audit
    try {
      await audit.log({
        actor: user.email,
        action: "Updated Patient record",
        status: "Success",
        target: `${hostIpAddress(req)}`,
        source: `${clientIpAddress(req)}`,
        message: `'${user.email}' updated new patient record.`,
      });
    } catch (err) {
      return next(err);
    }
  };
}
