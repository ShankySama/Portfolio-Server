const express = require("express");
const { getFooterData, createFooterData } = require("../controllers/footerController");

const router = express.Router();
router.get("/footerData", getFooterData);
router.post("/footerdata",createFooterData);

module.exports = router;
