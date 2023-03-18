const connectDatabase = require("../../utils/db");
import NextCors from "nextjs-cors";
const Newsletter = require("../../models/NewsletterSignup.js");

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
                const newsletterSignups = await Newsletter.find({});
                res.status(200).json({ success: true, data: newsletterSignups });
            } catch (err) {
                res.status(400).json({ success: false, error: err.message });
            }
            break;
        case "POST":
            try {
                const newsletter = await Newsletter.create(req.body);
                res.status(201).json({ success: true, data: newsletter });
            } catch (err) {
                res.status(400).json({ success: false, error: err.message });
            }
            break;
        case "DELETE":
            try {
                const message = await Newsletter.findByIdAndDelete(req.query.id);
                //  console.log("DELEETEDD");
                if (!message) res.status(400).json({ success: false, message: "Message not found" });
                res
                    .status(200)
                    .json({ success: true, message: "Email deleted successfully" });
            } catch (err) {
                res.status(400).json({ success: false, error: err.message });
            }
            break;
        default:
            res.status(400).json({ success: false, message: "Default request" });
            break;
    }
}
