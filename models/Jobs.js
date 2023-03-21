import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  workType: { type: String, required: true },
  department: { type: String, required: true },
  description: { type: String, required: true },
  roles: { type: String, required: true },
  skills: { type: String, required: true },
  whatWeOffer: { type: String, required: true },
  selectionProcess: { type: String, required: true },
  
  date: { 
    type: String,
    default: (new Date()).toLocaleDateString("en-GB"),
  },
});
mongoose.models = {};
module.exports =  mongoose.model("Jobs", JobSchema);
