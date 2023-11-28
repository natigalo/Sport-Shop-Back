import User from "../../Models/User.js";

export default async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(201).json({ Response: newUser, success: true, message: 'User Created' });
    } catch (error) {
        return next()
    }
}