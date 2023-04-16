"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      id_treatment: {
        type: Sequelize.INTEGER,
        references: {
          model: "treatments",
          key: "id",
        },
      },
      id_patient: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      id_schedule: {
        type: Sequelize.INTEGER,
        references: {
          model: "schedules",
          key: "id",
        },
      },
      id_inquiries: {
        type: Sequelize.INTEGER,
        references: {
          model: "inquiries",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("dates");
  },
};
