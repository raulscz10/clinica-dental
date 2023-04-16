"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          name_rol: "Admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_rol: "Doctor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_rol: "Cliente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", {
      [Op.or]: [
        { name_rol: "Admin" },
        { name_rol: "Doctor" },
        { name_rol: "Client" },
      ],
    });
  },
};
