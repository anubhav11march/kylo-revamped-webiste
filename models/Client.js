const mongoose = require("mongoose");

const ClientMessageSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    city: String,
    phone: String,
    budget: String,
    message: String,
    date: {
        type: String,
        default: (new Date()).toLocaleDateString("en-GB"),
    }
});
mongoose.models = {};
module.exports = mongoose.model("ClientMessages", ClientMessageSchema);