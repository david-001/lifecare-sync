import mongoose from "mongoose";

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
  image: {
    type: String,
  },
  contact: { type: String },
  emergency_contact: { type: String },
  pre_existing_conditions: { type: String },
  symptoms: { type: String },
  diagnosis: { type: String },
  treatment: { type: String },
  medication: { type: String },
  comments: { type: String },
  // Doctor
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Patient = mongoose.model("Patient", patientSchema);
export { Patient };
