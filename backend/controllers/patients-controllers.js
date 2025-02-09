const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Patient = require('../models/patient');
const User = require('../models/user');


const getPatientById = async (req, res, next) => {
  const patientId = req.params.pid;

  let patient;
  try {
    patient = await Patient.findById(patientId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a patient.',
      500
    );
    return next(error);
  }

  if (!patient) {
    const error = new HttpError(
      'Could not find patient for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ patient: patient });
};


const getPatientsByUserId = async (req, res, next) => {
  const userId = req.userData.userId;

  let userWithPatients;
  try {
    userWithPatients = await User.findById(userId).populate('patients');
  } catch (err) {
    const error = new HttpError(
      'Fetching patients failed, please try again later.',
      500
    );
    return next(error);
  }


  if (!userWithPatients) {
    return next(
      new HttpError('Could not find patients for the provided user id.', 404)
    );
  }

  res.json({
    patients: userWithPatients.patients.map(patient =>
      patient.toObject({ getters: true })
    )
  });
};

const createPatient = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { first_name, last_name, age, contact, emergency_contact, pre_existing_conditions, symptoms, diagnosis, treatment, medication, comments } = req.body;

  const createdPatient = new Patient({
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
    owner: req.userData.userId
  });

  let user;
  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError(
      'Creating patient failed, please try again.',
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id.', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPatient.save({ session: sess });
    user.patients.push(createdPatient);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating patient failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ patient: createdPatient });
};

const updatePatient = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { first_name, last_name, age, contact, emergency_contact, pre_existing_conditions, symptoms, diagnosis, treatment, medication, comments } = req.body;
  const patientId = req.params.pid;

  let patient;
  try {
    patient = await Patient.findById(patientId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update patient.',
      500
    );
    return next(error);
  }

  if (patient.owner.toString() !== req.userData.userId) {
    const error = new HttpError('You are not allowed to edit this patient.', 401);
    return next(error);
  }

  patient.first_name = first_name;
  patient.last_name = last_name;
  patient.age = age;
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
      'Something went wrong, could not update patient.',
      500
    );
    return next(error);
  }

  res.status(200).json({ patient: patient.toObject({ getters: true }) });
};

const deletePatient = async (req, res, next) => {
  const patientId = req.params.pid;

  let patient;
  try {
    patient = await Patient.findById(patientId).populate('owner');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete patient.',
      500
    );
    return next(error);
  }

  if (!patient) {
    const error = new HttpError('Could not find patient for this id.', 404);
    return next(error);
  }

  if (patient.owner.id !== req.userData.userId) {
    const error = new HttpError(
      'You are not allowed to delete this patient.',
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
      'Something went wrong, could not delete patient.',
      500
    );
    return next(error);
  }

  res.status(200).json({ message: 'Deleted patient.' });
};

exports.getPatientById = getPatientById;
exports.getPatientsByUserId = getPatientsByUserId;
exports.createPatient = createPatient;
exports.updatePatient = updatePatient;
exports.deletePatient = deletePatient;