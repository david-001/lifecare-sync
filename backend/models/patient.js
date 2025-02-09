const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  contact: { type: String },
  emergency_contact: { type: String },
  pre_existing_conditions: { type: String },
  symptoms: { type: String },
  diagnosis: { type: String },
  treatment: { type: String },
  medication: { type: String },
  comments: { type: String },
  owner: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Patient', patientSchema);