import User from "../../Models/User.js";
import Creator from "../../models/Creator.js";

export default async (req, res, next) => {
    try {
        req.body.user_id = req.user._id;
        await User.findByIdAndUpdate(req.user._id, { role: 1 }, { new: true });
        const creator = await Creator.create(req.body);
        if (creator) {
            return res.status(200).json({ success: true, response: creator, message: 'Creator is Creatad' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Not Created' });
    } catch (error) {
        return next();
    }
}