// Endpoints

const controller = require("./src/controller");
const express = require("express");
const router = express.Router();

router.post("/createData", controller.createDataControllerAction);
router.get("/getData", controller.getDataControllerAction);

module.exports = { router };
