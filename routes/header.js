const express = require("express");
const {
  getHeaderData,
  createHeaderData,
} = require("../controllers/headerController");
const router = express.Router();

router.get("/headerData", getHeaderData);
router.post("/headerData", createHeaderData);

module.exports = router;
