const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isDoctor = require("../middlewares/isDoctor");
const doctorController = require("../controllers/doctorController");
//end-points Doctor

//Mirar las citas que tiene el doctor
router.get("/viewDoctorDates/:id", verifyToken, isDoctor, doctorController.getDoctorDates);

//Mirar los pacientes que tiene el doctor
router.get("/viewDoctorPatients/:id", verifyToken, isDoctor, doctorController.viewDoctorDates);

module.exports = router;