import Creator from "../../models/Creator.js"

export default async (req, res, next) => {
    try {
        let all = await Creator.find()
        if (all) {
            return res.status(200).json({
                response: all,
                message: 'Creator found successfully!'
            })
        } else {
            return res.status(404).json({
                response: null,
                message: 'Creator not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}