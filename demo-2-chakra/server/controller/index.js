const useCases = require("../usecases");

const makeCreateFormActionController = require("./create-form-controller");
const createFormActionController = makeCreateFormActionController({
  createForm: useCases.createForm,
});

const makeGetFormActionController = require("./get-form-controller");
const getFormActionController = makeGetFormActionController({
  getForm: useCases.getForm,
});

const makeGetSingleFormActionController = require("./get-single-form-controller");
const getSingleFormActionController = makeGetSingleFormActionController({
  getSingleForm: useCases.getSingleForm,
});

module.exports = Object.freeze({
  createFormActionController,
  getFormActionController,
  getSingleFormActionController
});
