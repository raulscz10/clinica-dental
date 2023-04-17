const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

//end-points Doctor
module.exports = router;

//Mirar las citas que tiene el doctor
router.get("/viewDoctorDates/:id", doctorController.getDoctorDates);

//Mirar los pacientes que tiene el doctor
router.get("/viewDoctorPatients/:id", doctorController.viewDoctorDates);