'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rol.hasMany(models.User, {
        foreignKey: "id_rol", // foreignKey en modelo Usuario
     });
    }
  }
  Rol.init({
    name_rol: {
      type:DataTypes.STRING,
      validate:{
        is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
      }
    },
  }, {
    sequelize,
    modelName: 'Rol',
    tableName: "roles",
  });
  return Rol;
};