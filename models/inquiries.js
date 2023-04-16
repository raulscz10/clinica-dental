"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inquiries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inquiries.belongsTo(models.User, {
        as: "doctor",
        foreignKey: "id_doctor", // foreignKey de Alumno
      });
      Inquiries.hasMany(models.Date, {
        foreignKey: "id_inquiries",
      });
    }
  }
  Inquiries.init(
    {
      inquiries_door: DataTypes.CHAR,
      id_doctor: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Inquiries",
      tableName: "inquiries",
    }
  );
  return Inquiries;
};
