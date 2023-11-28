import Creator from "../../models/Creator.js";

export default async (req, res, next) => {
    try {
        const creator = await Creator.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (creator) {
            res.status(200).json({ success: true, response: creator, message: 'Creator Update' });
        }

        return res.status(404).json({ success: true, response: null, message: 'Creator Not Found' });
    } catch (error) {
        return next();
    }
}