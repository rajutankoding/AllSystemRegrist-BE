'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pasien.init({
    rekamMedis: DataTypes.STRING,
    nama: DataTypes.STRING,
    ktp: DataTypes.BIGINT,
    noHp: DataTypes.STRING,
    email: DataTypes.STRING,
    nip: DataTypes.STRING,
    jk: DataTypes.BOOLEAN,
    tglLahir: DataTypes.DATE,
    golDarah: DataTypes.BOOLEAN,
    sttNikah: DataTypes.BOOLEAN,
    agama: DataTypes.BOOLEAN,
    tglDaftar: DataTypes.DATE,
    kdPj: DataTypes.STRING,
    noPeserta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pasien',
  });
  return Pasien;
};