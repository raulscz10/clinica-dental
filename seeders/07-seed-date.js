'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "dates",
      [
        {
          date: "2023-04-18",
          id_treatment: 2,
          id_patient: 3,
          id_schedule: 2,
          id_inquiries: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2023-04-25",
          id_treatment: 7,
          id_patient: 3,
          id_schedule: 6,
          id_inquiries: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "2023-05-10",
          id_treatment: 4,
          id_patient: 3,
          id_schedule: 7,
          id_inquiries: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("dates", {
      [Op.or]: [
        { date: "2023-04-18" },
      ],
    });
  },
};
