import { User } from "../models/user.js";
import { Patient } from "../models/patient.js";
import mongoose from "mongoose";
import { HttpError } from "../lib/http-error.js";

const createUserDb = async (id) => {
  // Create user in database
  const createdUser = new User({
    userId: id,
  });
  await createdUser.save();
};

const getUserFromToken = async (token) => {
  return await User.findOne({ token: token });
};

const setToken = async (userId, token) => {
  let user;
  user = await getUserDb(userId);
  user.token = token;
  await user.save();
};

const getUserDb = async (userId) => {
  return await User.findOne({ userId: userId });
};

const getPatientDb = async (patientId) => {
  return await Patient.findById(patientId).populate("owner");
};

const getPatientsByUserIdDb = async (userId) => {
  return await User.findOne({ userId: userId }).populate("patients");
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
  user
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

  const sess = await mongoose.startSession();
  sess.startTransaction();
  await createdPatient.save({ session: sess });
  user.patients.push(createdPatient);
  await user.save({ session: sess });
  await sess.commitTransaction();
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
  patient
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

  await patient.save();
};

const deletePatientDb = async (patient) => {
  const sess = await mongoose.startSession();
  sess.startTransaction();
  await patient.deleteOne({ session: sess });
  patient.owner.patients.pull(patient);
  await patient.owner.save({ session: sess });
  await sess.commitTransaction();
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
