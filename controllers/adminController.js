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

module.exports = adminController;
