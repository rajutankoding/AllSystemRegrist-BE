"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pelanggan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pelanggan.init(
    {
      nama: DataTypes.STRING,
      ktp: DataTypes.BIGINT,
      noHp: DataTypes.STRING,
      email: DataTypes.STRING,
      jk: DataTypes.ENUM,
      tglLahir: DataTypes.DATE,
      golDarah: DataTypes.ENUM,
      alamat: DataTypes.STRING,
      sttNikah: DataTypes.ENUM,
      agama: DataTypes.ENUM,
      tglDaftar: DataTypes.DATE,
      noPeserta: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pelanggan",
    }
  );
  return Pelanggan;
};
