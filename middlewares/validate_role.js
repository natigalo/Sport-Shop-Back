import Creator from "../models/Creator.js";

export default async (req, res, next) => {
    if (req.user.role === 1) {
        const creator = await Creator.findOne({ user_id: req.user._id });
        if (creator) {
            req.creator = creator;
            return next();
        }
        return res.status(401).json({ success: false, response: null, messages: ['Not authorized'] });
    }

    return res.status(401).json({ success: false, response: null, messages: ['Not authorized'] });
}