import bcryptjs from 'bcryptjs';

export default (req, res, next) => {
    if (bcryptjs.compareSync(req.body.password, req.user.password)) {
        delete req.user.password;
        return next();
    }
    return res.status(400).json({ response: false, messages: ['Invalid credentials!'] });
}