const { sendErrorResponse } = require("../_util/sendResponse");

const isAdmin = (req, res, next) => {
   const { user_rol } = req;
   if (user_rol != 1) {
      return sendErrorResponse(res, 403, "Dont have permission");
   } else next();
};

module.exports = isAdmin;