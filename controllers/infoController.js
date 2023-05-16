const {
  Date,
  Direction,
  Inquiries,
  Rol,
  Schedule,
  Treatment,
  User,
} = require("../models");

const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

const infoController = {};

infoController.getAllTreatments = async (req, res) => {
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

infoController.getAllSchedules = async (req, res) => {
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

module.exports = infoController;
