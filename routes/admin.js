const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const adminController = require("../controllers/adminController");

//end-points Administrador
/* Ver Todos Los Roles*/
router.get("/viewRolesAdmin", verifyToken, isAdmin, adminController.viewRolesAdmin);

/* Ver Todas Las Direcciones */
//router.get("/viewDirectionsAdmin", adminController.viewDirectionsAdmin);

/* Ver Todos Los Usuarios */
//router.get("/viewUsersAdmin", adminController.viewUsersAdmin);

/* Ver Tod0s Los Tratamientos */
//router.get("/viewTreatmentsAdmin", adminController.viewTreatmentsAdmin);

/* Ver Todos Los Horarios */
//router.get("/viewSchedulesAdmin", adminController.viewSchedulesAdmin);

/* Ver Todas Las Consultas */
//router.get("/viewInquiriesAdmin", adminController.viewInquiriesAdmin);

/* Ver Todas Las Citas */
//router.get("", adminController.);

module.exports = router;
