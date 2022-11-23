import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  designation: { type: String, required: true },
  resume: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now(),
  },
});
mongoose.models = {};
module.exports =  mongoose.model("Applications", ApplicationSchema);
