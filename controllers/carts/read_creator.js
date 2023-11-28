import Product from '../../Models/Product.js';
import Cart from '../../models/Cart.js';
import Creator from '../../models/Creator.js';

export default async (req, res, next) => {
    try {

        const creator = await Creator.findOne({ user_id: req.user._id });

        const cart = await Cart.find({creator_id: creator._id}, "_id product_id state_id quantity")
            .populate("state_id", "-_id name description");

        if (cart) {
            return res.status(200).json({ success: true, response: cart, message: 'Found' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Not Found' })
    } catch (error) {
        return next();
    }
}