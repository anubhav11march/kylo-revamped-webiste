const connectDatabase = require("../../utils/db");
const Blogs = require("../../utils/db");

// database connection
connectDatabase();

export default async function handler(req, res) {
    switch (req.method) {
        case "POST": 
            try {
                const blog = await Blogs.create(req.body);
                res.status(201).json({ success: true, data: blog });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "GET":
            try {
                const blogs = await Blogs.find({});
                res.status(200).json({ success: true, data: blogs });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}