const connectDatabase = require("../../../utils/db");
import NextCors from "nextjs-cors";
const Jobs = require("../../../models/Jobs");

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
        const job = await Jobs.findById(req.query.id);

        res.status(200).json({ success: true, data: job });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "Default request" });
      break;
  }
}
