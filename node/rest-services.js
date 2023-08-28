const controller = require("./src/controller");
const express = require("express");
const router = express.Router();

router.post("/createData", controller.createDataControllerAction);

module.exports = { router };
