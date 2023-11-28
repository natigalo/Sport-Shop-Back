import joi from 'joi';

export default joi.object({
    name: joi.string().required().messages({
        'any.required': 'Name is required.',
        'string.base': 'Name must be a string.',
    }),
    lastname: joi.string().required().messages({
        'any.required': 'Last name is required.',
        'string.base': 'Last name must be a string.',
    }),
    company: joi.string().required().messages({
        'any.required': 'Company is required.',
        'string.base': 'Company must be a string.',
    }),
    city: joi.string().required().messages({
        'any.required': 'City is required.',
        'string.base': 'City must be a string.',
    }),
    country: joi.string().required().messages({
        'any.required': 'Country is required.',
        'string.base': 'Country must be a string.',
    })
});