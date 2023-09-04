const Joi = require("joi");

const buildMakeFormTemplate = require("./create-form-entities");
const makeFormTemplate = buildMakeFormTemplate({ Joi });

module.exports = Object.freeze({
  makeFormTemplate,
});
