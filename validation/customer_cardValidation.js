const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.string().email().required(),
        number: Joi.string().required(),
        year: Joi.string().min(1990).max(new Date, getFullYear()).required(),
        month: Joi.string().required(),
        is_active: Joi.boolean(),
        is_main: Joi.boolean(),
    });

    return schema.validate(customerCard);
}

module.exports = { validateCustomerCard }