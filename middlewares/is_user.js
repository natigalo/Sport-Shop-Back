import Cart from "../models/Cart.js";
import Creator from "../models/Creator.js";

export default async (req, res, next) => {
    try {
        const is_cart_user = await Cart.findOne({ _id: req.params.id, user_id: req.user._id });
        if (is_cart_user) {
            return next();
        }

        const creator = await Creator.findOne({ user_id: req.user._id });
        const is_cart_creator = await Cart.findOne({ _id: req.params.id, creator_id: creator?._id });
        if (is_cart_creator) {
            return next();
        }

        return res.status(401).json({ success: false, response: null, message: 'Not authorized' });
    } catch (error) {
        return next();
    }
}