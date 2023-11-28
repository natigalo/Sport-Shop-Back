import Creator from "../models/Creator.js";

export default async (req, res, next) => {
    try {
        const creator = await Creator.findOne({ user_id: req.user._id });
        req.body.creator_id = creator._id;
        return next();
    } catch (error) {
        return next();
    }
}