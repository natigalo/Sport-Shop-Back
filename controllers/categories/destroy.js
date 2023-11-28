import Category from "../../Models/Category.js";

export default async (req, res, next) => {
    try {
        let one = await Category.findByIdAndDelete(req.params.id)
        if (one) {
            return res.status(200).json({
                success: true,
                messages: "Category Deleted!",
                response: one._id
            })
        } else {
            return res.status(404).json({
                success: false,
                messages: "Category is not found",
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}