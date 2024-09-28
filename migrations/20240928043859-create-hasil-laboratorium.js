"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hasilLaboratoria", {
      id: {
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
      namaTes: {
        type: Sequelize.STRING,
      },
      hasilTes: {
        type: Sequelize.TEXT,
      },
      tglTes: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("hasilLaboratoria");
  },
};
