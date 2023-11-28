import Product from "../../Models/Product.js";

export default async (req, res, next) => {
	try {
		const search = {};
		const pagination = { page: 1, limit: 8 };
		const ordering = { price: 1 };

		if (req.query.name) { search.name = new RegExp(req.query.name.trim(), "i"); }
		if (req.query.category) { search.category_id = req.query.category.split(","); }
		if (req.query.page) { pagination.page = Number(req.query.page); }
		if (req.query.quantity) { pagination.limit = Number(req.query.quantity); }
		console.log(search);

		const skip = (pagination.page - 1) * pagination.limit;
		const limit = pagination.limit;
		const allProducts = await Product.countDocuments(search);

		const pages = Math.ceil(allProducts / pagination.limit);
		const prev = pagination.page === 1 ? null : pagination.page - 1;
		const next = pagination.page === pages ? null : pagination.page + 1;

		const all = await Product.find(search).skip(skip).limit(limit).sort(ordering);

		if (all.length > 0) {
			return res.status(200).json({ success: true, response: all, message: "Products found!", prev, next, pages, allProducts });
		} else {
			return res.status(400).json({ success: false, response: null, message: "Products not found!" });
		}
	} catch (error) {
		next(error);
	}
};
