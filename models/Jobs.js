const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    jobTitle: String,
    workType: String,
    department: String,
    description: String,
    date: {
        type: Date,
        default: Date.now()
    }
});
mongoose.models = {};
module.exports = mongoose.model("Jobs", JobSchema);