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
    case "PUT":
      try {
        const updatedRole = await Jobs.findByIdAndUpdate(
          req.query.id,
          req.body,
          // {
          //   new: true,
          //   runValidators: true,
          //   useFindAndModify: false,
          // }
        );
        console.log("called")
        res.status(200).json({ success: true, updatedRole });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }

    case "DELETE":
      try {
        const job = await Jobs.findByIdAndDelete(req.params.id);
        res
          .status(200)
          .json({ success: true, message: "Job deleted successfully" });
      } catch (err) {
        res.status(400).json({ success: false, error: err.message });
      }

    default:
      res.status(400).json({ success: false, message: "Default request" });
      break;
  }
}
