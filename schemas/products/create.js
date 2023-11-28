import joi from 'joi-oid';

export default joi.object({
    name: joi.string().required().min(2).max(50).messages({
        'string.min': 'Name must be at least 2 characters long.',
        'string.max': 'Name cannot exceed 50 characters.',
        'any.required': 'Name is required.',
    }),
    category_id: joi.objectId().required().messages({
        "any.required" : "Category is required",
    }),
    description: joi.string().required().messages({
        'string.base': 'Description must be a string.',
        'any.required': 'Description is required.',
    }),
    price: joi.number().required().integer().positive().messages({
        'number.base': 'Price must be a valid number.',
        'number.integer': 'Price must be an integer.',
        'number.positive': 'Price must be a positive number.',
        'any.required': 'Price is required.',
    }),
    stock: joi.number().required().integer().positive().messages({
        'number.base': 'Stock must be a valid number.',
        'number.integer': 'Stock must be an integer.',
        'number.positive': 'Stock must be a positive number.',
        'any.required': 'Stock is required.',
    }),
    sex: joi.string().required().valid('U', 'H', 'M').messages({
        'any.only': 'Invalid value for sex. Allowed values are "U", "H", "M".',
        'any.required': 'Sex is required.',
    }),
    url_photo: joi.string().required().uri().messages({
        'string.uri': 'URL for photo must be a valid URI.',
        'any.required': 'URL for photo is required.',
    }),
});