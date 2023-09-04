const useCases = require("../usecases");

const makeCreateFormActionController = require("./create-form-controller");
const createFormActionController = makeCreateFormActionController({
  createForm: useCases.createForm,
});

const makeGetFormActionController = require("./get-form-controller");
const getFormActionController = makeGetFormActionController({
  getForm: useCases.getForm,
});

module.exports = Object.freeze({
  createFormActionController,
  getFormActionController
});
