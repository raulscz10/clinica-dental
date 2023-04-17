const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

//end-points auth

//registro de usuarios
router.post("/signin", authController.signIn);
router.post("/login", authController.login);

module.exports = router;