const useCases = require("../use-cases");

const makeCreateDataControllerAction = require("./create-data");
const createDataControllerAction = makeCreateDataControllerAction({
  createData: useCases.createData,
});

const makeGetDataControllerAction = require("./get-data");
const getDataControllerAction = makeGetDataControllerAction({
  getData: useCases.getData,
});

module.exports = Object.freeze({
  createDataControllerAction,
  getDataControllerAction
});
