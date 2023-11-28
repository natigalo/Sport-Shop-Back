import User from "../../Models/User.js";

export default async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user._id, { active: false });
        return res.status(200).json({ response: 'Id: ' + req.user._id, message: 'User signed out' });
    } catch (error) {
        return next(error);
    }
}