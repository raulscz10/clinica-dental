const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// end-points Clientes

/* Mirar Las Citas De Un Cliente En Concreto */
router.get("/viewDates/:id", customerController.getUserDates);

/* Crear Las Citas De Un Cliente */
router.post("/newUserDate", customerController.newUserDate);

/* Modificar Las Citas De Un Cliente */
router.put("/updateUserDate/:id", customerController.updateUserDate);

/*Eliminar Las Citas De un Cliente en Concreto*/
router.delete("/deleteUserDates/:id", customerController.deleteUserDates);

/* Ver Mi Perfil */
router.get("/viewMyProfile/:id", customerController.viewMyProfile);

/* Modificar Mi Perfil */
router.put("/updateUserProfile/:id", customerController.updateUserProfile);

module.exports = router;
