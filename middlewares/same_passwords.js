export default (req, res, next) => {
    if (req.body.password === req.body.confirmPassword) {
        return next();
    }

    return res.status(401).json({ success: false, response: null, messages: ['Passwords do not match'] })
}