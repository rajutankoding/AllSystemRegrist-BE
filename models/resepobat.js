"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResepObat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ResepObat.belongsTo(models.Dokter, { foreignKey: "idDokter" });
      ResepObat.belongsTo(models.RekamMedis, { foreignKey: "idRm" });
    }
  }
  ResepObat.init(
    {
      idRm: DataTypes.INTEGER,
      namaObat: DataTypes.STRING,
      dosis: DataTypes.STRING,
      aturanPakai: DataTypes.STRING,
      durasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ResepObat",
    }
  );
  return ResepObat;
};
