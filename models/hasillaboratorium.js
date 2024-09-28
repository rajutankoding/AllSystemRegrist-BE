"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hasilLaboratorium extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hasilLaboratorium.belongsTo(models.RekamMedis, { foreignKey: "idRm" });
    }
  }
  hasilLaboratorium.init(
    {
      idRm: DataTypes.INTEGER,
      namaTes: DataTypes.STRING,
      hasilTes: DataTypes.TEXT,
      tglTes: DataTypes.DATE,
      catatan: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "hasilLaboratorium",
    }
  );
  return hasilLaboratorium;
};
