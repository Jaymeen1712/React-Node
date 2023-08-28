global.logger = console.log;

const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const { taskTable } = require("../data-access");

const makeCreateData = require("./create-data");
const createData = makeCreateData({
    uuidv4,
    moment,
    createDatadb: taskTable.createData,
});

module.exports = Object.freeze({
    createData,
});
