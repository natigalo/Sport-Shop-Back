import Product from "../../Models/Product.js";

export default async (req, res, next) => {
    try {
        const queries = {};
        if (req.query.name) { queries.name = new RegExp(req.query.name.trim(), 'i') }
        const productsCreator = await Product.find({ creator_id: req.creator._id }, "-createdAt -updatedAt -__v -creator_id").populate("category_id", "name color").find(queries)
            
        if (productsCreator.length > 0) {
            return res.status(200).json({ success: true, response: productsCreator, message: 'Products Found' });
        }

        return res.status(404).json({ success: false, response: null, message: 'Not Found' });
    } catch (error) {
        return next();
    }
}