'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.hasMany(models.Date, {
        foreignKey: "id_schedule", // foreignKey en modelo Cita
     });
    }
  }
  Schedule.init({
    schedule_ini: DataTypes.TIME,
    schedule_fi: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Schedule',
    tableName: "schedules",
  });
  return Schedule;
};