import Product from "../../Models/Product.js";

export default async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (product) {
            res.status(200).json({ success: true, response: product, message: 'Product Update' });
        }

        return res.status(404).json({ success: true, response: null, message: 'Product Not Found' });
    } catch (error) {
        return next();
    }
}