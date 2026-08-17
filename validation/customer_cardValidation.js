const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        phone: Joi.string().required(),
        number: Joi.string().required(),
        year: Joi.string().required(),
        month: Joi.string().required(),
        is_active: Joi.boolean(),
        is_main: Joi.boolean(),
    });

    return schema.validate(customerCard);
}

module.exports = { validateCustomerCard }