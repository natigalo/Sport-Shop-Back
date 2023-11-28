import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    req.token = jwt.sign({ _id: req.user._id }, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 });
    return next();
}