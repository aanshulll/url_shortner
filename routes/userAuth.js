const express = require("express");
const router = express.Router();
const {
  CreateUser,
  Redirect,
  login,
  VerifiyUser
} = require("../controllers/usersAuth");


// User routes (post)
router.post("/user", CreateUser);
router.post("/login", VerifiyUser);

// (get)
// Sign up User
router.get("/sighup", Redirect);
// Log In
router.get("/login", login)
module.exports = router;