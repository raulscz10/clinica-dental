const {
  Date,
  Direction,
  Inquiries,
  Rol,
  Schedule,
  Treatment,
  User,
} = require("../models");
const { Op } = require("sequelize");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

const customerController = {};

/* Ver Citas De un Usario */

customerController.getUserDates = async (req, res) => {
  const { id } = req.params;
  try {
    const customers = await Date.findAll({
      where: { id_patient: id },
      attributes: {
        exclude: [
          "id_treatment",
          "id_patient",
          "id_schedule",
          "id_inquiries",
          "createdAt",
          "updatedAt",
        ],
      },
      include: [
        {
          model: Treatment,
          as: "treatment",
          attributes: {
            exclude: ["createdAt", "updatedAt", "id"],
          },
        },
        {
          model: Schedule,
          as: "schedule",
          attributes: {
            exclude: ["createdAt", "updatedAt", "id"],
          },
        },
        {
          model: Inquiries,
          as: "inquirie",
          attributes: {
            exclude: ["createdAt", "updatedAt", "id"],
          },
        },
      ],
    });
    sendSuccessResponse(res, 200, customers);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Crear Citas Para Un Usuario */
customerController.newUserDate = async (req, res) => {
  //const { date, id_treatment, id_schedule, id_inquiries } = req.body;
  const newDate = {
    ...req.body,
  };

  try {
    await Date.create(newDate);
    sendSuccessResponse(res, 201, "New date created successfully");
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error creating new Date", error);
  }
};

/* Modificar citas */
customerController.updateUserDate = async (req, res) => {
  const { id } = req.params;
  const date = {
    ...req.body,
    updatedAt: new Date(),
  };
  try {
    const num = await Date.update(date, {
      where: { id: id },
    });
    if (num == 1) sendSuccessResponse(res, 201, "Date changed successfully");
    else sendErrorResponse(res, 400, "Date updating process failed");
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, `Error updating date ${id}`, error);
  }
};

/* Eliminar Citas */
customerController.deleteUserDates = async (req, res) => {
  const { id } = req.params;

  try {
    const num = await Date.destroy({
      where: { id: id },
    });

    if (num == 1) {
      sendSuccessResponse(res, 202, "Date deleted successfully");
    } else {
      sendErrorResponse(res, 400, `Can't delete date ${id}. Date not found`);
    }
  } catch (error) {
    sendErrorResponse(res, 500, "Error deleting date", error);
  }
};

/* Ver Un Perfil De Un Usuario */
customerController.viewMyProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await User.findByPk(id, {
      attributes: {
        exclude: [
          "user_password",
          "id_rol",
          "id_street",
          "createdAt",
          "updatedAt",
        ],
      },

      include: [
        {
          model: Direction,
          as: "direction",
          attributes: {
            exclude: ["createdAt", "updatedAt", "id"],
          },
        },
      ],
    });

    if (customer) sendSuccessResponse(res, 200, customer);
    else sendErrorResponse(res, 404, `Client '${id}' not found`);
  } catch (error) {
    sendErrorResponse(res, 500, "Error retreinving client", error);
  }
};

/* Modificar Mi Perfil */
customerController.updateUserProfile = async (req, res) => {
  const { id } = req.params;
  const user = {
    ...req.body,
    id_rol: 3,
    updatedAt: new Date(),
  };
  try {
    const num = await User.update(user, {
      where: { id: id },
    });
    if (num == 1)
      sendSuccessResponse(res, 201, "User profile updated successfully");
    else sendErrorResponse(res, 400, "Profile updating process failed");
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, `Error updating profile ${id}`, error);
  }
};

module.exports = customerController;
