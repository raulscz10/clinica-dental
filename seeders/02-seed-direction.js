'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "directions",
      [
        {
          street: "C. Esteve Cardelus",
          number: "64",
          postal: "08470",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "C. Santa María",
          number: "14",
          postal: "08460",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          street: "C. Vitameni",
          number: "64",
          postal: "08460",
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
        { street: "C. Esteve Cardelus" },
      ],
    });
  },
};
