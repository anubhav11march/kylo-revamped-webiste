const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  designation: String,
  resume: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Applications", ApplicationSchema);
