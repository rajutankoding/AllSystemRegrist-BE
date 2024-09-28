"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Inventaris", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      namaItem: {
        type: Sequelize.STRING,
      },
      jenisItem: {
        type: Sequelize.ENUM,
        values: ["Obat", "Alat Medis"],
        allowNull: false,
      },
      kuantitas: {
        type: Sequelize.INTEGER,
      },
      supplier: {
        type: Sequelize.STRING,
      },
      restock: {
        type: Sequelize.DATE,
      },
      kedaluarsa: {
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
    await queryInterface.dropTable("Inventaris");
  },
};
