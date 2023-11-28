import Creator from "../models/Creator.js";

export default async (req, res, next) => {
    const existCreator = await Creator.findOne({ user_id: req.user._id });
    if (existCreator) {
        return res.status(409).json({ success: false, response: null, messages: ['Creator Exist'] });
    }
    return next();
}