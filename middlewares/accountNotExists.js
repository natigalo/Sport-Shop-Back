import User from "../Models/User.js";

export default async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        req.user = {
            _id: user._id,
            name: user.name,
            lastname: user.lastName,
            email: user.email,
            password: user.password,
            role: user.role,
            photo: user.photo
        };
        return next();
    }
    return res.status(404).json({ success: false, response: null, messages: ['user does not exist!'] });
}