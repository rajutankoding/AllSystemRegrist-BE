"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JanjiTemu", {
      idJanji: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idPelanggan: {
        type: Sequelize.INTEGER,
        references: {
          model: "pelanggan",
          key: "idPelanggan",
        },
      },
      idDokter: {
        type: Sequelize.INTEGER,
        references: {
          model: "dokter",
          key: "idDokter",
        },
      },
      tglJanji: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      alasan: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM,
        values: ["Terjadwal", "Selesai", "Batal"],
        defaultValue: "Terjadwal",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JanjiTemu");
  },
};
