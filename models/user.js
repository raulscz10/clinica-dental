"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol, {
        as: "rol",
        foreignKey: "id_rol", // foreignKey de Usuario a Rol
      });
      User.belongsTo(models.Direction, {
        as: "direction",
        foreignKey: "id_street", // foreignKey de Usuario a Direcciones
      });
      User.hasMany(models.Date, {
        foreignKey: "id_patient",
      });
      User.hasMany(models.Inquiries, {
        foreignKey: "id_doctor",
      })
    }
  }
  User.init(
    {
      user_name: {
        type:DataTypes.STRING,
        validate: {
          is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
        }
      },
      user_surname: {
        type:DataTypes.STRING,
        validate: {
          is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
        }
      },
      user_age: {
        type:DataTypes.INTEGER,
        validate:{
          isInt: {
            msg: "Debe ser un número entero",
         },
         min: {
            msg: "La edad debe ser mayor que 1",
            args: 1,
         },
         max: 200,
        }
      },
      user_phone: DataTypes.STRING,
      user_gmail: {
        type:DataTypes.STRING,
        validate:{
          isEmail: true,
        }
      },
      user_password: {
        type:DataTypes.STRING,
        validate:{
          min: 8,
        }
      },
      id_rol: DataTypes.INTEGER,
      id_street: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
