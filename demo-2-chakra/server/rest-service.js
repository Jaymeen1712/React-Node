const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("/createForm", controller.createFormActionController);
router.get("/getForm", controller.getFormActionController);
router.get("/:uuid", controller.getSingleFormActionController);
router.get("/:offset/:limit", controller.getPageDataActionController);

module.exports = { router };
