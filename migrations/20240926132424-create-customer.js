'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      ktp: {
        type: Sequelize.BIGINT
      },
      noHp: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      jk: {
        type: Sequelize.BOOLEAN
      },
      tglLahir: {
        type: Sequelize.DATE
      },
      golDarah: {
        type: Sequelize.BOOLEAN
      },
      alamat: {
        type: Sequelize.STRING
      },
      sttNikah: {
        type: Sequelize.BOOLEAN
      },
      agama: {
        type: Sequelize.BOOLEAN
      },
      tglDaftar: {
        type: Sequelize.DATE
      },
      noPeserta: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers');
  }
};