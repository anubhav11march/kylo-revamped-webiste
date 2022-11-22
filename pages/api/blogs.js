const connectDatabase = require("../../utils/db");
import NextCors from "nextjs-cors";
import Blogs from "../../models/Blogs";

connectDatabase();

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });


  // *********************************************************************

  switch (req.method) {
    case "POST":
      try {
        const blog = await Blogs.create(req.body, function (err, data) {
          return res.status(200).json(data);
        });
        res.status(201).json({ success: true, data: blog });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    case "GET":
      try {
        const blogs = await Blogs.find({});
        res.status(200).json({ success: true, data: blogs });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;

    case "PUT":
      try {
        const updatedBlog = await Blogs.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true,
            useFindAndModify: false,
          }
        );
        res.status(200).json({ success: true, updatedBlog });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
    case "DELETE":
      try {
        const blog = await Blogs.findById(req.params.id);
        await blog.remove();
        res
          .status(200)
          .json({ success: true, message: "Blog deleted successfully" });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
    default:
      res.status(400).json({ success: false, message: "Default request" });
      break;
  }
}