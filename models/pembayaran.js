"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pembayaran.belongsTo(models.idPelanggan, { foreignKey: "idPelanggan" });
      Pembayaran.belongsTo(models.JanjiTemu, { foreignKey: "idJanji" });
    }
  }
  Pembayaran.init(
    {
      idPelanggan: DataTypes.INTEGER,
      idJanji: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
      metodeBayar: DataTypes.ENUM,
      statusBayar: DataTypes.ENUM,
      tglBayar: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Pembayaran",
    }
  );
  return Pembayaran;
};
