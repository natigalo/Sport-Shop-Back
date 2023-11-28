import joi from 'joi';

const schema = joi.object({
    name: joi.string().required().min(3)
        .messages({
            'string.base': 'Name is required!',
            'string.empty': 'Name is required!',
            'string.min': 'Name is too short!'
        }),
    lastName: joi.string().required().min(3)
        .messages({
            'string.base': 'Lastname is required!',
            'string.empty': 'Lastname is required!',
            'string.min': 'Lastname is too short!'
        }),
    password: joi.string().required().min(8).alphanum()
        .messages({
            'any.required': 'Password is required!!',
            'string.base': 'Password is required!!',
            'string.empty': 'Password is required!!',
            'string.min': 'Password is too short!!',
            'string.alphanum': 'Password must be alphanum!!'
        }),
    confirmPassword: joi.string().required().min(8).alphanum()
        .messages({
            'any.required': 'Confirm your password!!',
            'string.base': 'Confirm your password!!',
            'string.empty': 'Confirm your password!!',
            'string.min': 'Confirm password is too short!!',
            'string.alphanum': 'Confirm password must be alphanum!!'
        }),
    email: joi.string().required().email({ minDomainSegments: 2 })
        .messages({
            'any.required': 'Email is required!!',
            'string.base': 'Email is required!!',
            'string.empty': 'Email is required!!',
            'string.email': 'Invalid format email!!'
        }),
    authorize: joi.boolean().valid(true).required().messages({
        'any.only': 'You must authorize the terms.',
        'any.required': 'Authorization of terms is required.',
    })
})

export default schema;