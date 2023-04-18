const { getTokenFromHeader, decodedToken } = require("../_util/token");

const { sendErrorResponse } = require("../_util/sendResponse");

const verifyToken = (req, res, next) => {
   const token = getTokenFromHeader(req.headers);
   console.log(token); //TODO
   if (!token) {
      return sendErrorResponse(res, 401, "No authorization token was found");
   }

   try {
      const decoded = decodedToken(token);
      console.log(decoded) //TODO
      req.user_id = decoded.user_id;
      req.user_rol = decoded.user_rol;
      console.log(req.user_rol); //TODO
      next();
   } catch (error) {
      sendErrorResponse(res, 400, "Invalid token", error);
   }
};

module.exports = verifyToken;