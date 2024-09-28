"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ResepObats", {
      idObat: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idRm: {
        type: Sequelize.INTEGER,
        references: {
          model: "RekamMedis",
          key: "idRm",
        },
      },
      idDokter: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dokter",
          key: "idDokter",
        },
      },
      namaObat: {
        type: Sequelize.STRING,
      },
      dosis: {
        type: Sequelize.STRING,
      },
      aturanPakai: {
        type: Sequelize.STRING,
      },
      durasi: {
        type: Sequelize.STRING,
      },
      instruksi: {
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
    await queryInterface.dropTable("ResepObats");
  },
};
