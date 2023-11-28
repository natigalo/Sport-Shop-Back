import Product from "../Models/Product.js";
import Creator from "../models/Creator.js";

export default async (req, res, next) => {
    if (req.user.role === 2) {
        return next();
    }
    if (req.user.role === 1) {
        const creatorFind = await Creator.findOne({ user_id: req.user._id });
        const product = await Product.findOne({ _id: req.params.id, creator_id: creatorFind?._id });
        if (product) {
            return next();
        }
        return res.status(401).json({ success: false, response: null, messages: ['Not authorized'] });
    }

    return res.status(401).json({ success: false, response: null, messages: ['Not authorized'] });
}