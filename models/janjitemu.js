"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JanjiTemu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JanjiTemu.belongsTo(models.Pelanggan, { foreignKey: "idPelanggan" });
      JanjiTemu.belongsTo(models.Dokter, { foreignKey: "idDokter" });
    }
  }
  JanjiTemu.init(
    {
      idPelanggan: DataTypes.INTEGER,
      idDokter: DataTypes.INTEGER,
      tglJanji: DataTypes.DATE,
      alasan: DataTypes.STRING,
      status: DataTypes.ENUM,
      idPelanggan: DataTypes.INTEGER,
      idDokter: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "JanjiTemu",
    }
  );
  return JanjiTemu;
};
