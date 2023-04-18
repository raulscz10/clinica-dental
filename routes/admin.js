const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const adminController = require("../controllers/adminController");

//end-points Administrador
/* Ver Todos Los Roles*/
router.get("/viewRolesAdmin", verifyToken, isAdmin, adminController.viewRolesAdmin);

/* Ver Todas Las Direcciones */
router.get("/viewDirectionsAdmin", verifyToken, isAdmin, adminController.viewDirectionsAdmin);

/* Ver Todos Los Usuarios */
router.get("/viewUsersAdmin", verifyToken, isAdmin, adminController.viewUsersAdmin);

/* Ver Tod0s Los Tratamientos */
router.get("/viewTreatmentsAdmin", verifyToken, isAdmin, adminController.viewTreatmentsAdmin);

/* Ver Todos Los Horarios */
router.get("/viewSchedulesAdmin", verifyToken, isAdmin, adminController.viewSchedulesAdmin);

/* Ver Todas Las Consultas */
router.get("/viewInquiriesAdmin", verifyToken, isAdmin, adminController.viewInquiriesAdmin);

/* Ver Todas Las Citas */
router.get("/viewDatesAdmin", verifyToken, isAdmin, adminController.viewDatesAdmin);

/* Modificar Un Usuario */
router.put("/updateUserAdmin/:id", verifyToken, isAdmin, adminController.updateUserAdmin);

module.exports = router;
