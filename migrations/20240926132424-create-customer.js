"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pelanggan", {
      idPelanggan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
      },
      ktp: {
        type: Sequelize.BIGINT,
      },
      hoHp: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      nip: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["L", "P"],
      },
      tglLahir: {
        type: Sequelize.DATE,
      },
      golDarah: {
        type: Sequelize.ENUM,
        values: ["A", "B", "AB", "O"],
      },
      sttNikah: {
        type: Sequelize.ENUM,
        values: ["Belum Menikah", "Menikah", "Cerai"],
      },
      agama: {
        type: Sequelize.ENUM,
        values: ["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Privacy"],
        defaultValue: "Privacy",
      },
      tglDaftar: {
        type: Sequelize.DATE,
      },
      noPeserta: {
        type: Sequelize.STRING,
      },
      alergi: {
        type: Sequelize.STRING,
      },
      riwayatMedis: {
        type: Sequelize.TEXT,
      },
      alamat: {
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
    await queryInterface.dropTable("Pelanggan");
  },
};
