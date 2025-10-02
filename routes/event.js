const express = require("express");
const router = express.Router();
const {
  generateNewshortID,
  redirectToMainUrl,
  showclicks,
 
} = require("../controllers/event");

// Order matters: analytics must come before /:id
router.post("/", generateNewshortID);
router.get("/analytics/:id", showclicks);
router.get("/:id", redirectToMainUrl);



module.exports = router;
