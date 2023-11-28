import State from "../../models/State.js";

export default async (req, res, next) => {
    try {
        const states = await State.find();
        if (states.length > 0) {
            return res.status(200).json({ success: true, response: states, message: 'States Found' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Not Found' });
    } catch (error) {
        return next();
    }
}