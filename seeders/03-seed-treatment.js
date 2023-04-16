'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "treatments",
      [
        {
          name_treatment: "Implantes Dentales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Ortodoncia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Estética Dental",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Odontologia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Cirugia Ortognática",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Prótesis Dental",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Rehabilitación Oral",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Periodoncia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Odontopediatria",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name_treatment: "Urgencias",
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
        { name_treatment: "Implantes Dentales" },
        { name_treatment: "Ortodoncia" },
        { name_treatment: "Estética Dental" },
        { name_treatment: "Odontologia" },
        { name_treatment: "Cirugia Ortognática" },
        { name_treatment: "Prótesis Dental" },
        { name_treatment: "Rehabilitación Oral" },
        { name_treatment: "Periodoncia" },
        { name_treatment: "Odontopediatria" },
        { name_treatment: "Urgencias" },
      ],
    });
  },
};
