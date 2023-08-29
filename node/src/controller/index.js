const useCases = require("../use-cases");

const makeCreateDataControllerAction = require("./create-data");
const createDataControllerAction = makeCreateDataControllerAction({
  createData: useCases.createData,
});

const makeGetDataControllerAction = require("./get-data");
const getDataControllerAction = makeGetDataControllerAction({
  getData: useCases.getData,
});

const makeDeleteDataControllerAction = require("./delete-data");
const deleteDataControllerAction = makeDeleteDataControllerAction({
  deleteData: useCases.deleteData,
});

module.exports = Object.freeze({
  createDataControllerAction,
  getDataControllerAction,
  deleteDataControllerAction,
});
