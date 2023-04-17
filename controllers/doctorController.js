const { Date, Direction, Inquiries, Rol, Schedule, Treatment, User } = require("../models");
const { Op } = require("sequelize");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
   sendSuccsessResponse,
   sendErrorResponse,
} = require("../_util/sendResponse");

const doctorController = {};


module.exports = doctorController;