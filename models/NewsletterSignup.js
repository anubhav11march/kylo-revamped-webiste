import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});
mongoose.models = {};
module.exports = mongoose.model("Newsletter", NewsletterSchema);
