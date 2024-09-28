"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pembayarans", {
      idPembayaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idPelanggan: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pelanggan",
          key: "idPelanggan",
        },
      },
      idJanji: {
        type: Sequelize.INTEGER,
        references: {
          model: "JanjiTemu",
          key: "idJanji",
        },
      },
      total: {
        type: Sequelize.DECIMAL,
      },
      metodeBayar: {
        type: Sequelize.ENUM,
        values: ["Cash", "Transfer", "BPJS"],
      },
      statusBayar: {
        type: Sequelize.ENUM,
        values: ["Lunas", "Belum Lunas"],
      },
      tglBayar: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Pembayarans");
  },
};
