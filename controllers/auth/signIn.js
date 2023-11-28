import User from "../../Models/User.js"

export default async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user._id, { active: true });
        console.log(req.user);
        return res.status(200).json({ success: true, response: { user: req.user, token: req.token }, message: 'User Signin' })
    } catch (error) {
        return next();
    }
}