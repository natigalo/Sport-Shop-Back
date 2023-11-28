import Creator from "../../models/Creator.js";

export default async (req, res, next) => {
    try {
        const creator = await Creator.findByIdAndDelete(req.params.id);
        if (creator) {
            return res.status(200).json({ success: true, response: creator, message: 'Creator Found and Destroy' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Creator not found' })
    } catch (error) {
        return next();
    }
}