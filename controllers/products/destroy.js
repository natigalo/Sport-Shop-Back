import Product from "../../Models/Product.js";

export default async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            return res.status(200).json({ success: true, response: product, message: 'Product Found and Destroy' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Product not found' })
    } catch (error) {
        return next();
    }
}