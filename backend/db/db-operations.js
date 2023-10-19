import { User } from "../models/user.js";
import { Patient } from "../models/patient.js";
import mongoose from "mongoose";
import { HttpError } from "../lib/http-error.js";

const createUserDb = async (id, next) => {
  // Create user in database
  try {
    const createdUser = new User({
      userId: id,
    });
    await createdUser.save();
  } catch (err) {
    return next(err);
  }
};

const getUserFromToken = async (token, next) => {
  try {
    return await User.findOne({ token: token });
  } catch (err) {
    return next(err);
  }
};

const setToken = async (userId, token, next) => {
  let user;
  try {
    user = await getUserDb(userId, next);
    user.token = token;
    await user.save();
  } catch (err) {
    return next(err);
  }
};

const getUserDb = async (userId, next) => {
  try {
    return await User.findOne({ userId: userId });
  } catch (err) {
    return next(err);
  }
};

const getPatientDb = async (patientId, next) => {
  try {
    return await Patient.findById(patientId).populate("owner");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find patient.",
      500
    );
    return next(error);
  }
};

const getPatientsByUserIdDb = async (userId, next) => {
  try {
    return await User.findOne({ userId: userId }).populate("patients");
  } catch (err) {
    return next(err);
  }
};

const createPatientDb = async (
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
  user,
  next
) => {
  const createdPatient = new Patient({
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
    const error = new HttpError(
      "Creating patient failed, please try again.",
      500
    );
    return next(error);
  }
  return createdPatient;
};

const updatePatientDb = async (
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
  patient,
  next
) => {
  patient.first_name = first_name;
  patient.last_name = last_name;
  patient.age = age;
  patient.image = image;
  patient.contact = contact;
  patient.emergency_contact = emergency_contact;
  patient.pre_existing_conditions = pre_existing_conditions;
  patient.symptoms = symptoms;
  patient.diagnosis = diagnosis;
  patient.treatment = treatment;
  patient.medication = medication;
  patient.comments = comments;

  try {
    await patient.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update patient.",
      500
    );
    return next(error);
  }
};

const updateDoctor = async (new_doctor, patient, next) => {
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    patient.owner = new_doctor;
    await patient.save({ session: sess });
    patient.owner.patients.pull(patient);
    await patient.owner.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could update doctor.",
      500
    );
    return next(error);
  }
};

const deletePatientDb = async (patient, next) => {
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await patient.deleteOne({ session: sess });
    patient.owner.patients.pull(patient);
    await patient.owner.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete patient.",
      500
    );
    return next(err);
  }
};

export {
  getUserDb,
  getUserFromToken,
  setToken,
  getPatientsByUserIdDb,
  getPatientDb,
  createPatientDb,
  updatePatientDb,
  deletePatientDb,
};
export default createUserDb;
