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
        const {id} = req.query;
        const blog = await Blogs.findById(id);
        res.status(200).json({ success: true, data: blog });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "Default request" });
      break;
  }
}
