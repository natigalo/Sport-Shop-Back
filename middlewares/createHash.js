import bcryptjs from 'bcryptjs';

export default (req, res, next) => {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
    req.body.confirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);
    return next();
}