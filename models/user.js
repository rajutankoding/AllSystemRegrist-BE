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
      User.hasMany(models.Dokter, { foreignKey: "idDokter" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      userName: DataTypes.STRING,
      gender: DataTypes.ENUM,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING,
      role: DataTypes.ENUM,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
