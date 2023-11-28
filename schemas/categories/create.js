import joi from 'joi';

export default joi.object({
    name: joi.string().required().min(5).messages({
        'any.required': 'Name is required!!',
        'string.base': 'Name is required!!',
        'string.empty': 'Name is required!!'
    }),
    color: joi.string().required().min(5).messages({
        'any.required': 'color is required!!',
        'string.base': 'color is required!!',
        'string.empty': 'color is required!!',
        'string.min': 'color is too short!!'
    })
});