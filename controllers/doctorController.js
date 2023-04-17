const { Date, Direction, Inquiries, Rol, Schedule, Treatment, User } = require("../models");
const { Op } = require("sequelize");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
   sendSuccsessResponse,
   sendErrorResponse,
} = require("../_util/sendResponse");

const doctorController = {};

/* Ver las citas que tiene el doctor/a */
doctorController.getDoctorDates = async (req, res) => {
const {id} = req.params;
   try {
      const doctors = await Inquiries.findAll({
         where: { id_doctor: id},
         attributes: {
            exclude: [
               "id_doctor",
               "createdAt",
               "updatedAt"
            ],
         },
         include: [
            {
              model: Date,
              as: "date",
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
              model: Treatment,
              as: "treatment",
              attributes: {
                exclude: ["createdAt", "updatedAt", "id"],
              },
            },
          ],
      });
      sendSuccsessResponse(res, 200, doctors);
   }catch(error){
      let code = error.name == "SequelizeValidationError" ? 400 : 500;
      sendErrorResponse(res, code, "Error retreiving customers dates");
   }
};


/* Ver los pacientes que tiene */
doctorController.viewDoctorDates = async (req, res) => {
   const {id} = req.params;

   try {
      const doctorsCustomer = await Inquiries.findAll({
         where: {id_doctor: id},
         attributes: {
            exclude: [
               "inquiries_door",
               "id_doctor",
               "createdAt",
               "updatedAt",
             ],
         },
         include: [
            {
              model: Date,
              attributes: {
                exclude: ["createdAt", "updatedAt", "id", "date", "id_treatment", "id_schedule", "id_inquiries"],
              },
            },
          ],
      });
      sendSuccsessResponse(res, 200, doctorsCustomer);
   }catch(error){
      let code = error.name == "SequelizeValidationError" ? 400 : 500;
      sendErrorResponse(res, code, "Error retreiving customer's name");
   }
}

module.exports = doctorController;