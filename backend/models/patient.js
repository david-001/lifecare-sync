import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
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
  // blood type is a string limited to the possible blood types, and required
  blood_type: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    default: "O+",
    required: true,
  },
  // emergency contact is an optional string
  emergency_contact: String,
  // pre-existing conditions is an optional string
  pre_conditions: String,
  // current condition is an optional string, but the default is "stable"
  current_condition: {
    type: String,
    enum: ["stable", "serious", "critical", "discharged"],
    default: "stable",
  },
  // treatment is an optional string, but the default is "no treatment assigned"
  treatment: {
    type: String,
    default: "No treatment assigned.",
  },
  // medicine is an optional string, but the default is "no medicine assigned"
  medicine: {
    type: String,
    default: "No medicine is assigned.",
  },
  // Doctor
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // comments are an optional string
  comments: String,
});

const Patient = mongoose.model("Patient", patientSchema);
export { Patient };
