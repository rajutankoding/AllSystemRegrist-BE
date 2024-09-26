'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    nama: DataTypes.STRING,
    ktp: DataTypes.BIGINT,
    noHp: DataTypes.STRING,
    email: DataTypes.STRING,
    jk: DataTypes.BOOLEAN,
    tglLahir: DataTypes.DATE,
    golDarah: DataTypes.BOOLEAN,
    alamat: DataTypes.STRING,
    sttNikah: DataTypes.BOOLEAN,
    agama: DataTypes.BOOLEAN,
    tglDaftar: DataTypes.DATE,
    noPeserta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};