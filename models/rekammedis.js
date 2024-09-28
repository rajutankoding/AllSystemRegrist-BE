"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RekamMedis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RekamMedis.init(
    {
      idPelanggan: DataTypes.INTEGER,
      idJanji: DataTypes.INTEGER,
      idDokter: DataTypes.INTEGER,
      diagnosa: DataTypes.STRING,
      tindakan: DataTypes.TEXT,
      resep: DataTypes.TEXT,
      catatan: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "RekamMedis",
    }
  );
  return RekamMedis;
};
