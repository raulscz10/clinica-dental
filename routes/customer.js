const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isClient = require("../middlewares/isClient");
const customerController = require("../controllers/customerController");

// end-points Clientes

/* Mirar Las Citas De Un Cliente En Concreto */
router.get("/viewDates/:id", verifyToken, isClient, customerController.getUserDates);

/* Crear Las Citas De Un Cliente */
router.post("/newUserDate", verifyToken, isClient, customerController.newUserDate);

/* Modificar Las Citas De Un Cliente */
router.put("/updateUserDate/:id", verifyToken, isClient, customerController.updateUserDate);

/*Eliminar Las Citas De un Cliente en Concreto*/
router.delete("/deleteUserDates/:id", verifyToken, isClient, customerController.deleteUserDates);

/* Ver Mi Perfil */
router.get("/viewMyProfile/:id", customerController.viewMyProfile);

/* Modificar Mi Perfil */
router.put("/updateUserProfile/:id", customerController.updateUserProfile);

module.exports = router;
