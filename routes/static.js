const express = require("express");
const router = express.Router();
const {staticRouter} = require("../controllers/static");


router.get("/", staticRouter);
module.exports = router;