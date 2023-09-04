const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const { taskTable } = require("../data-access");
const makeFormTemplate = require("../entities");

const makeCreateForm = require("./create-form");
const createForm = makeCreateForm({
  uuidv4,
  Joi,
  moment,
  makeFormTemplate,
  createFormdb: taskTable.createForm,
});

const makeGetForm = require("./get-form");
const getForm = makeGetForm({ getFormdb: taskTable.getForm });

module.exports = Object.freeze({
  createForm,
  getForm,
});
