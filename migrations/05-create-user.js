'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING
      },
      user_surname: {
        type: Sequelize.STRING
      },
      user_age: {
        type: Sequelize.INTEGER
      },
      user_phone: {
        type: Sequelize.STRING
      },
      user_gmail: {
        type: Sequelize.STRING,
        unique: true,
      },
      user_password: {
        type: Sequelize.STRING
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id",
       },
      },
      id_street: {
        type: Sequelize.INTEGER,
        references: {
          model: "directions",
          key: "id",
       },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};