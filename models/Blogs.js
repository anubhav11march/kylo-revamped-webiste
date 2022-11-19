const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Blogs", BlogSchema);
