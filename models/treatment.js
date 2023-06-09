'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Treatment.hasMany(models.Date, {
        foreignKey: "id_treatment", // foreignKey en modelo Cita
     });
    }
  }
  Treatment.init({
    name_treatment: {
      type:DataTypes.STRING,
      validate:{
        is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
      }
    },
  }, {
    sequelize,
    modelName: 'Treatment',
    tableName: "treatments",
  });
  return Treatment;
};