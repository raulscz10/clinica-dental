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
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

const adminController = {};

/* Método Para Ver Todos Los Roles */
adminController.viewRolesAdmin = async (req, res) => {
  try {
    const listRoles = await Rol.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    sendSuccessResponse(res, 200, listRoles);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Método Para Ver Todas Los Direcciones */
adminController.viewDirectionsAdmin = async (req, res) => {
  try {
    const listDirections = await Direction.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    sendSuccessResponse(res, 200, listDirections);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Método Para Ver Todos Los Usuarios */
adminController.viewUsersAdmin = async (req, res) => {
  try {
    const listUsers = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    sendSuccessResponse(res, 200, listUsers);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Método Para Ver Todos Los Tratamientos */
adminController.viewTreatmentsAdmin = async (req, res) => {
  try {
    const listTreatments = await Treatment.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    sendSuccessResponse(res, 200, listTreatments);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Método Para Ver Todos Los Horarios */
adminController.viewSchedulesAdmin = async (req, res) => {
  try {
    const listSchedules = await Schedule.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    sendSuccessResponse(res, 200, listSchedules);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Método Para Ver Todas Las Consultas */
adminController.viewInquiriesAdmin = async (req, res) => {
  try {
    const listInquiries = await Inquiries.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    sendSuccessResponse(res, 200, listInquiries);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Método Para Ver Todas Las Citas */
adminController.viewDatesAdmin = async (req, res) => {
  try {
    const listDates = await Date.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    sendSuccessResponse(res, 200, listDates);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Método Para Actualizar Un Usuarios */
adminController.updateUserAdmin = async (req, res) => {
  const { id } = req.params;
  const user = {
    ...req.body,
    updatedAt: new Date(),
  };
  try {
    const num = await User.update(user, {
      where: { id: id },
    });
    if (num == 1) sendSuccessResponse(res, 201, "User changed successfully");
    else sendErrorResponse(res, 400, "User updating process failed");
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, `Error updating User ${id}`, error);
  }
}

module.exports = adminController;
