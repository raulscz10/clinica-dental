const { getTokenFromHeader, decodedToken } = require("../_util/token");

const { sendErrorResponse } = require("../_util/sendResponse");

const verifyToken = (req, res, next) => {
   const token = getTokenFromHeader(req.headers);

   if (!token) {
      return sendErrorResponse(res, 401, "No authorization token was found");
   }

   try {
      const decoded = decodedToken(token);

      req.id = decoded.id;
      req.id_role = decoded.id_role;

      next();
   } catch (error) {
      sendErrorResponse(res, 400, "Invalid token", error);
   }
};

module.exports = verifyToken;