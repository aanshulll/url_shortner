const express = require("express");
const router = express.Router();
const {generateNewshortID,redirectToMainUrl,showclicks,staticRouter} = require("../controllers/event");



router.post("/", generateNewshortID).get("/:id", redirectToMainUrl).get("/analytics/:id", showclicks).get("/", staticRouter)


module.exports = router