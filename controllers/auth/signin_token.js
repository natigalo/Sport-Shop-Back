export default (req, res, next) => {
    req.user = {
        _id: req.user._id,
        name: req.user.name,
        lastname: req.user.lastname,
        email: req.user.email,
        password: req.user.password,
        role: req.user.role,
        photo: req.user.photo
    }
    return res.status(200).json({ success: true, response: { user: req.user, token: req.token }, message: 'User sigin with token' })
}