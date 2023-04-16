"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "schedules",
      [
        {
          schedule_ini: "09:00:00",
          schedule_fi:"10:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "10:00:00",
          schedule_fi:"11:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "11:00:00",
          schedule_fi:"12:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "12:00:00",
          schedule_fi:"13:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "13:00:00",
          schedule_fi:"14:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "14:00:00",
          schedule_fi:"15:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "15:00:00",
          schedule_fi:"16:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "16:00:00",
          schedule_fi:"17:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "17:00:00",
          schedule_fi:"18:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "18:00:00",
          schedule_fi:"19:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "19:00:00",
          schedule_fi:"20:00:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schedule_ini: "20:00:00",
          schedule_fi:"21:00:00",
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
        { schedule_ini: "09:00:00" },
        { schedule_ini: "10:00:00" },
        { schedule_ini: "11:00:00" },
        { schedule_ini: "12:00:00" },
        { schedule_ini: "13:00:00" },
        { schedule_ini: "14:00:00" },
        { schedule_ini: "15:00:00" },
        { schedule_ini: "16:00:00" },
        { schedule_ini: "17:00:00" },
        { schedule_ini: "18:00:00" },
        { schedule_ini: "19:00:00" },
        { schedule_ini: "20:00:00" },
      ],
    });
  },
};
