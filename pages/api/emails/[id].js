const connectDatabase = require("../../../utils/db");
import NextCors from "nextjs-cors";
const Newsletter = require("../../../models/NewsletterSignup.js");

connectDatabase();

export default async function handler(req, res) {

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  switch (req.method) {
    case "DELETE":
      try {
        await Newsletter.findByIdAndDelete(req.params.id);
        res
          .status(200)
          .json({ success: true, message: "Email deleted successfully" });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }

    default:
      res.status(400).json({ success: false, message: "Default request" });
      break;
  }
}
