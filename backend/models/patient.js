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
    enum: ["stable", "serious", "critical"],
    default: "stable",
  },
  // treatment is an optional string, but the default is "no treatment assigned"
  treatment: {
    type: String,
    default: "No treatment assigned.",
  },
  // Owner
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // comments are an optional string
  comments: String,
  doctors: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

const Patient = mongoose.model("Patient", patientSchema);
export { Patient };
