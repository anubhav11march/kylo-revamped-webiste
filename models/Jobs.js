import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  workType: { type: String, required: true },
  department: { type: String, required: true },
  description: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now(),
  },
});
mongoose.models = {};
module.exports =  mongoose.model("Jobs", JobSchema);
