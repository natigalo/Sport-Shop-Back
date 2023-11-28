import Product from "../../Models/Product.js";

export default async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id, "-_id -createdAt -updatedAt -__v")
            .populate("category_id", "name color").populate("creator_id", "-_id -createdAt -updatedAt -__v -user_id");
        if (product) {
            return res.status(200).json({ success: true, response: product, message: 'Product Found' });
        }
        return res.status(404).json({ success: false, response: null, message: 'Product Not Found' });
    } catch (error) {
        return next();
    }
}