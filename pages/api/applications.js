const connectDatabase = require("../../utils/db");
import NextCors from "nextjs-cors";
const Applications = require("../../models/Applications");

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  connectDatabase();

  // *********************************************************************

  switch (req.method) {
    case "GET":
      try {
        const applications = await Applications.find({});
        res.status(200).json({ success: true, data: applications });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    case "POST":
      try {
        const application = await Applications.create(req.body);
        res.status(201).json({ success: true, data: application });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    case "DELETE":
      try {
        const message = await Applications.findByIdAndDelete(req.query.id);
        //  console.log("DELEETEDD");
        if (!message) res.status(400).json({ success: false, message: "Message not found" });
        res
          .status(200)
          .json({ success: true, message: "Application deleted successfully" });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;
    default:
      res.status(400).json({ success: false, message: "Default request" });
      break;
  }
}
