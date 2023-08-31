// Endpoints

const controller = require("./controller");
const express = require("express");
const router = express.Router();

router.post("/createData", controller.createDataControllerAction);
router.get("/getData", controller.getDataControllerAction);
router.delete("/deleteData/:uuid", controller.deleteDataControllerAction);
router.put("/updateData/:uuid", controller.updateDataControllerAction);

module.exports = { router };
