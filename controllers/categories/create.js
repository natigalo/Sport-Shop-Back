import Category from "../../Models/Category.js";


export default async (req, res, next) => {
    try {
        req.body.admin_id = req.user._id;
        let one = await Category.create(req.body);
        return res.status(201).json({
            success: true,
            response: one,
            message: 'Category created'
        })
    } catch (error) {
        return next(error)
    }
}
