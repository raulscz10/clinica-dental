const express = require("express");
const router = express.Router();
const infoController = require("../controllers/infoController");

//end-points auth

//registro de usuarios
router.get("/horario", infoController.getAllSchedules);

router.get("/tratamiento", infoController.getAllTreatments);

module.exports = router;