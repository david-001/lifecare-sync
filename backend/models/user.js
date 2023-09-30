import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  patients: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Patient",
    },
  ],
  token: { type: String, default: null },
});

const User = mongoose.model("User", userSchema);
export { User };
