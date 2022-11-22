import { Schema, models, model } from "mongoose";

const BlogSchema = new Schema({
  author: String,
  avatar: String,
  thumbnail: String,
  title: String,
  content: String,
  category: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default models["Blogs"] || model("Blogs", BlogSchema);
