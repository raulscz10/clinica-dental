const { User } = require("../models");
const { createHash, compareHash } = require("../_util/hash");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");
const { generateToken } = require("../_util/token");


const authController = {};

authController.signIn = async (req, res) => {
  const {
    user_name,
    user_surname,
    user_age,
    user_phone,
    user_gmail,
    user_password,
    street,
    number,
    postal,
  } = req.body;

  const encryptedPassword = createHash(user_password);

  const newDirection = {
    street,
    number,
    postal,
  };

  const newUser = {
    user_name,
    user_surname,
    user_age,
    user_phone,
    user_gmail,
    user_password: encryptedPassword,
    id_rol: 3,
    id_street: 2,
  };

  try {
    await User.create(newUser);
    sendSuccessResponse(res, 201, "User registration done");
  } catch (error) {
    sendErrorResponse(res, 500, "Error creating user", error);
  }
};

authController.login = async (req, res) => {
  const { user_gmail, user_password } = req.body;

  if (!user_gmail || !user_password) {
    return sendErrorResponse(res, 400, "email and password requiered");
  }

  try {
    const user = await User.findOne({ user_gmail: user_gmail });
    console.log(user);

    if (!user) {
      return sendErrorResponse(res, 404, "Email's user doesn't exist");
    }
    const isValidPassword = compareHash(user_password, user.user_password);

    if (!isValidPassword) {
      return sendErrorResponse(res, 401, "Bad credentials");
    }

    const token = generateToken({ user_id: user.id, user_rol: user.id_rol });

    sendSuccessResponse(res, 200, {
      message: "User logged succesfully",
      token,
      role: user.role,
    });
  } catch (error) {
    sendErrorResponse(res, 500, "User login failed", error);
  }
};

module.exports = authController;
