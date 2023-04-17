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

module.exports = adminController;
