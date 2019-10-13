const Joi = require('joi');

const schemas = {
    CREATE : Joi.object().keys({
      todo_name: Joi.string().required()
    }),

    UPDATE : Joi.object().keys({
        todo_name : Joi.string().required()
    })
}

module.exports = schemas;