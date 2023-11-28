import Product from "../../Models/Product.js";

export default async (req, res, next) => {

    const queries = {};
    const pagination = { page: 1, limit: 12 };

    if (req.query.name) { queries.name = new RegExp(req.query.name.trim(), 'i') }
    if (req.query.page) { pagination.page = Number(req.query.page) }
    if (req.query.quantity) { pagination.limit = Number(req.query.quantity) }

    const skip = pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0;
    const limit = pagination.limit > 0 ? pagination.limit : 12;
    const allProducts = await Product.countDocuments(queries);

    const pages = Math.ceil(allProducts / pagination.limit);
    const before = pagination.page === 1 ? null : pagination.page - 1;
    const after = pagination.page === pages ? null : pagination.page + 1;

    try {
        let products = await Product.find(queries).populate("category_id", "name color").skip(skip).limit(limit)
        if (products.length != 0) {
            return res.status(200).json({
                response: {products, before, after, allProducts},
                message: 'Products found!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'Products not found'
            })
        }
    } catch (error) {
        next(error)
    }
}