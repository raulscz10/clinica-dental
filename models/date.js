'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Date.belongsTo(models.User, {
        as: "patient",
        foreignKey: "id_patient", // foreignKey de Usuario a Rol
      });
      Date.belongsTo(models.Inquiries, {
        as: "inquirie",
        foreignKey: "id_inquiries", // foreignKey de Usuario a Rol
      });
      Date.belongsTo(models.Schedule, {
        as: "schedule",
        foreignKey: "id_schedule", // foreignKey de Usuario a Rol
      });
      Date.belongsTo(models.Treatment, {
        as: "treatment",
        foreignKey: "id_treatment", // foreignKey de Usuario a Rol
      });
    }
  }
  Date.init({
    date: {
      type:DataTypes.DATEONLY,
      validate:{
        isDate: true,
      }
    },
    id_treatment: DataTypes.INTEGER,
    id_patient: DataTypes.INTEGER,
    id_schedule: DataTypes.INTEGER,
    id_inquiries: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Date',
    tableName: "dates",
  });
  return Date;
};