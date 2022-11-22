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
        type: Date,
        default: Date.now()
    }
});
mongoose.models = {};
module.exports = mongoose.model("ClientMessages", ClientMessageSchema);