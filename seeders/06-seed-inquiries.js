'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "inquiries",
      [
        {
          inquiries_door: 1,
          id_doctor: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("inquiries", {
      [Op.or]: [
        { inquiries_door: 1 },
      ],
    });
  },
};
