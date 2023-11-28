import User from "../../Models/User.js"

export default async (req, res, next) => {
    try {
        let users = await User.find()
        if (users) {
            return res.status(200).json({
                response: users,
                message: 'users found!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'users not found'
            })
        }
    } catch (error) {
        next(error)
    }
}