const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("/createForm", controller.createFormActionController);
router.get("/getForm", controller.getFormActionController);
router.get("/:uuid", controller.getSingleFormActionController);

module.exports = { router };
