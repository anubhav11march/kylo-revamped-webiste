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
    //Client Side
    case "POST":
      try {
        const blog = await Blogs.create(req.body);
        res.status(201).json({ success: true, data: blog });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    // Admin
    case "GET":
      try {
        let blogs = await Blogs.find({});
        const { category, keyword } = req.query;

        if (category && category !== "" && category !== "undefined") {
          blogs = blogs.filter((blog) => blog.category === category);
        }

        if (keyword && keyword !== "" && keyword !== "undefined") {
          blogs = blogs.filter((blog) => blog.author === keyword);
        }

        res.status(200).json({ success: true, data: blogs });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    case "DELETE":
      try {
        const message = await Blogs.findByIdAndDelete(req.query.id);
        //  console.log("DELEETEDD");
        if (!message) res.status(400).json({ success: false, message: "Message not found" });
        res
          .status(200)
          .json({ success: true, message: "Blog deleted successfully" });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "Default request" });
      break;
  }
}