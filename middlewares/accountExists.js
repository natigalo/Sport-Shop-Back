import User from "../Models/User.js";

export default async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ success: false, response: null, messages: ['user already exist!'] });
    }
    return next();
}