const Joi = require('joi');

module.exports = {
    create: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        // name: Joi.string().required().max(255),
        name: Joi.not().required(),
        langague: Joi.string().required().max(5),
        age: Joi.number().required(),
        picture: Joi.not().required(),
    }),
}