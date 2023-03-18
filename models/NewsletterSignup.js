import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default : Date().slice(4,16)
    },
});
mongoose.models = {};
module.exports = mongoose.model("Newsletter", NewsletterSchema);
