import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default : (new Date()).toLocaleDateString("en-GB")
    },
});
mongoose.models = {};
module.exports = mongoose.model("Newsletter", NewsletterSchema);
