const connectDatabase = require("../../../utils/db");
import NextCors from "nextjs-cors";
import Blogs from "../../../models/Blogs";

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
    case "GET":
      try {
        const { id } = req.query;
        const blog = await Blogs.findById(id);
        res.status(200).json({ success: true, data: blog });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    case "PUT":
      try {
        const blog = await Blogs.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true,
            useFindAndModify: false,
          }
        );
        res.status(200).json({ success: true, blog });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }

    case "DELETE":
      try {
        const blog = await Blogs.findByIdAndDelete(req.params.id);
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
