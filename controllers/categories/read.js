import Category from "../../Models/Category.js";

export default async (req, res, next) => {
    try {
        let all = await Category.find()
        if (all) {
            return res.status(200).json({
                response: all,
                message: 'Category found successfully!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'Category not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}