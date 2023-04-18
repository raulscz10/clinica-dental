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

const doctorController = {};

/* Ver las citas que tiene el doctor/a */
doctorController.getDoctorDates = async (req, res) => {
  const { id } = req.params;
  try {
    const doctorDates = await Date.findAll({
      where: { id_inquiries: id },
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
            exclude: ["createdAt", "updatedAt", "id", "id_doctor"],
          },
        },
      ],
    });
    sendSuccessResponse(res, 200, doctorDates);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving dates");
  }
};

/* Ver los pacientes que tiene */
doctorController.viewDoctorDates = async (req, res) => {
  const { id } = req.params;
  try {
    const doctorsCustomer = await Date.findAll({
      where: { id_inquiries: id },
      attributes: {
        exclude: [
          "id",
          "date",
          "id_treatment",
          "id_schedule",
          "id_inquiries",
          "createdAt",
          "updatedAt",
        ],
      },
      include: [
        {
          model: Inquiries,
          as: "inquirie",
          attributes: {
            exclude: [
              "id",
              "inquiries_door",
              "id_doctor",
              "createdAt",
              "updatedAt",
            ],
          },
        },
      ],
    });
    sendSuccessResponse(res, 200, doctorsCustomer);
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error retreiving customer's name");
  }
};

module.exports = doctorController;
