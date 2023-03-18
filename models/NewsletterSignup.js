import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
});
mongoose.models = {};
module.exports = mongoose.model("Newsletter", NewsletterSchema);
