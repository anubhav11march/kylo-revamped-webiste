const connectDatabase = require("../../utils/db");
import Blogs from "../../models/Blogs";

export default async function handler(req, res) {

    connectDatabase();

    switch (req.method) {
        case "POST": 
            try {
                const blog = await Blogs.create(req.body, function (err, data) {
                    return res.status(200).json(data)
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

        default:
            res.status(400).json({ success: false, message: "Default request" });
            break;
    }
}