"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RekamMedis", {
      idRm: {
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
          model: "Janjitemu",
          key: "idJanji",
        },
      },
      idDokter: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dokter",
          key: "idDokter",
        },
      },
      diagnosa: {
        type: Sequelize.STRING,
      },
      tindakan: {
        type: Sequelize.TEXT,
      },
      resep: {
        type: Sequelize.TEXT,
      },
      catatan: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("RekamMedis");
  },
};
