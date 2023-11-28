import Cart from "../../models/Cart.js";

export default async (req, res, next) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        if (cart) {
            return res.status(200).json({ success: true, response: cart, message: 'Cart Destroy' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Cart Not Destroy' });
    } catch (error) {
        return next();
    }
}