const { sendErrorResponse } = require("../_util/sendResponse");

const isAdmin = (req, res, next) => {
   const { id_rol } = req;

   if (id_rol != 1) {
      return sendErrorResponse(res, 403, "Dont have permission");
   } else next();
};

module.exports = isAdmin;