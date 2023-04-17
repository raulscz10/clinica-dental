'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          user_name: "Eugeni",
          user_surname: "Villadelbosch",
          user_age: "57",
          user_phone: "199865686",
          user_gmail: "eugeni@admin.com",
          user_password: bcrypt.hashSync("root", 10),
          id_rol: 1,
          id_street: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_name: "Roger",
          user_surname:"Rovira",
          user_age: "35",
          user_phone: "568991686",
          user_gmail: "roger@sol.com",
          user_password: bcrypt.hashSync("root", 10),
          id_rol: 2,
          id_street: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_name: "Raúl",
          user_surname:"Romero",
          user_age: "22",
          user_phone: "991686568",
          user_gmail: "raul@gmail.com",
          user_password: bcrypt.hashSync("root", 10),
          id_rol: 3,
          id_street: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", {
      [Op.or]: [
        { user_gmail: "roger@sol.com" },
        { user_gmail: "roger@sol.com" },
        { user_gmail: "raul@gmail.com" },
      ],
    });
  },
};
