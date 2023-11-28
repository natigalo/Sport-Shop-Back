import Cart from "../../models/Cart.js";

export default async (req, res, next) => {
    try {
        const cart = await Cart.find({ user_id: req.user._id }, "_id product_id state_id quantity createdAt")
            .populate({
                path: "product_id",
                select: "-createdAt -updatedAt -__v",
                populate: {
                    path: "category_id",
                    select: "-_id name color",
                }
            }).populate("state_id", "-_id name description");
        let total = 0;
        for (const product of cart) { total += product.product_id.price * product.quantity; }
        if (cart) {
            return res.status(200).json({ success: true, response: { cart, total }, message: 'Cart Found' });
        }

        return res.status(401).json({ satisfies: true, response: null, message: 'Cart Not Found' });
    } catch (error) {
        return next();
    }
}