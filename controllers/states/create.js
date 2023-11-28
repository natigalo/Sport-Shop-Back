import State from "../../models/State.js";

export default async (req, res, next) => {
    try {
        const state = await State.create(req.body);
        if (state) {
            return res.status(200).json({ success: true, response: state, message: 'State Created' });
        }
        return res.status(404).json({ success: false, response: null, message: 'Not Created' });
    } catch (error) {
        return next();
    }
}