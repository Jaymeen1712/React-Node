const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const {taskTable} = require("../data-access");
console.log("🚀 ~ file: index.js:6 ~ taskTable:", taskTable)
const makeFormTemplate = require("../entities");
// console.log("🚀 ~ file: index.js:7 ~ makeFormTemplate:", makeFormTemplate)

const makeCreateForm = require("./create-form");
const createForm = makeCreateForm({
  uuidv4,
  Joi,
  moment,
  makeFormTemplate,
  createFormdb: taskTable.createForm,
});

module.exports = Object.freeze({
  createForm,
});
