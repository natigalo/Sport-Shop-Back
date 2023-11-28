import Product from "../../Models/Product.js";

export default async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        if (product) {
            return res.status(200).json({ success: true, response: product, message: 'Product Created' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Product Not Created' });
    } catch (error) {
        return next();
    }
}