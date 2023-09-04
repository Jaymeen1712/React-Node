const useCases = require("../usecases");

const makeCreateFormActionController = require("./create-form-controller");
const createFormActionController = makeCreateFormActionController({
  createForm: useCases.createForm,
});

module.exports = Object.freeze({
  createFormActionController,
});
