"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Direction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Direction.hasMany(models.User, {
        foreignKey: "id_street", // foreignKey en modelo Usuario
      });
    }
  }
  Direction.init(
    {
      street: {
        type: DataTypes.STRING,
        validate: {
          is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
        },
      },
      number: {
        type: DataTypes.CHAR,
        validate: {
          isInt: {
            msg: "Debe ser un número entero",
          },
          min: {
            msg: "La edad debe ser mayor que 1",
            args: 1,
          },
        },
      },
      postal: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "Direction",
      tableName: "directions",
    }
  );
  return Direction;
};
