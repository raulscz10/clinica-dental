const express = require("express");
const router = express.Router();
const authContoller = require("../controllers/authController");

//end-points auth

//registro de usuarios
router.post("/signin", authContoller.signIn);

module.exports = router;