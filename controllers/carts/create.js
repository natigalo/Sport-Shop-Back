import Cart from '../../models/Cart.js';
import Product from '../../Models/Product.js';

export default async (req, res, next) => {
    try {
        const product = await Product.findById(req.body.product_id);
        req.body.creator_id = product?.creator_id;
        req.body.quantity = Number(req.body.quantity);
        const cart = await Cart.create(req.body);
        if (cart) {
            return res.status(200).json({ success: true, response: cart, message: 'Cart Created' });
        }

        return res.status(400).json({ success: false, response: null, message: 'Cart Not Created' });
    } catch (error) {
        return next();
    }
}