import Creator from "../models/Creator.js";

export default async (req, res, next) => {
    try {
        const creatorFind = await Creator.findById(req.params.id);
        if (creatorFind) {
            return next();
        }

        return res.status(404).json({ success: false, response: null, messages: ['Not Found'] });
    } catch (error) {
        return next();
    }
}