const Joi = require("joi");

const buildMakeDataTemplate = require("./create-data-entities");
const makeDataTemplate = buildMakeDataTemplate({ Joi });

module.exports = Object.freeze({
  makeDataTemplate
});
