const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

// Admin user only
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true, minlength: 6 },
  patients: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Patient' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);