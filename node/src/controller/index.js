const useCases = require("../use-cases");

const makeCreateDataControllerAction = require("./create-data");
const createDataControllerAction = makeCreateDataControllerAction({
    createData: useCases.createData,
});

module.exports = Object.freeze({
    createDataControllerAction,
});
