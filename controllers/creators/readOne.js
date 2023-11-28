import Creator from "../../models/Creator.js";

export default async (req, res, next) => {
    try {
        const creator = await Creator.findById(req.params.id, " -_id name lastname company city").populate("user_id", "-_id email role photo");
        if (creator) {
            return res.status(200).json({ scuccess: true, response: creator, message: 'Creator Found' });
        }

        return res.status(404).json({ scuccess: true, response: null, message: 'Not Found' });
    } catch (error) {
        return next();
    }
}