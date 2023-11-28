import Cart from "../../models/Cart.js";

export default async (req, res, next) => {
    try {
        const body = {}
        if (req.body.quantity) { body.quantity = Number(req.body.quantity); }
        if (req.body.state_id) { body.state_id = req.body.state_id }

        const cart = await Cart.findByIdAndUpdate(req.params.id, body, { new: true });
        if (cart) {
            return res.status(200).json({ success: true, response: cart, message: 'Cart updated successfully' });
        }

        return res.status(404).json({ success: true, response: null, message: 'Cart not found' });
    } catch (error) {
        return next();
    }
}