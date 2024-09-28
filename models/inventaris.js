'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventaris extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventaris.init({
    namaItem: DataTypes.STRING,
    jenisItem: DataTypes.ENUM,
    kuantitas: DataTypes.INTEGER,
    supplier: DataTypes.STRING,
    restock: DataTypes.DATE,
    kedaluarsa: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Inventaris',
  });
  return Inventaris;
};