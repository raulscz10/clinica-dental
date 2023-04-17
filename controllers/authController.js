const {User} = require('../models');
const {createHash, compareHash} = require('../_util/hash')
const {sendSuccessResponse, sendErrorResponse,} = require('../_util/sendResponse');

const authController = {};

authController.signIn = async (req,res) => {
    const {user_name, user_surname, user_age, user_phone, user_gmail, user_password, street, number, postal} = req.body;

    const encryptedPassword = createHash(user_password);

    const newDirection = {
        street,
        number,
        postal,
    }

    const newUser = {
        user_name,
        user_surname,
        user_age,
        user_phone,
        user_gmail,
        user_password: encryptedPassword,
        id_rol: 3,
        id_street: 2,

    }

    try{
        await User.create(newUser);
        sendSuccessResponse(res, 201, "User registration done");
    }catch(error){
        sendErrorResponse(res, 500, "Error creating user", error);
    }
}

module.exports = authController;