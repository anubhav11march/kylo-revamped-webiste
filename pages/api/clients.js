const connectDatabase = require("../../utils/db");
import NextCors from "nextjs-cors";
const ClientMessages = require("../../models/Client");


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
           const messages = await ClientMessages.find({});
           res.status(200).json({ success: true, data: messages });
         } catch (err) {
           res.status(400).json({ success: false, error: err.message });
         }
         break;
       case "POST":
         try {
           const message = await ClientMessages.create(req.body);
           res.status(201).json({ success: true, data: message });
         } catch (err) {
           res.status(400).json({ success: false, error: err.message });
         }
         break;
       default:
         res.status(400).json({ success: false, message: "Default request" });
         break;
     }
}