export default (req, res, next) => {
    req.body.user_id = req.user._id;
    return next();
}