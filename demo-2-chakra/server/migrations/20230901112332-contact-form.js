"use strict";

const { Sequelize } = require("sequelize");

async function up({ context: queryInterface }) {
  return queryInterface.createTable("contactForm", {
    id: {
      type: Sequelize.INTEGER(255),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    firstName: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    subscribe: {
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      type: Sequelize.STRING(255),
    },
    updatedAt: {
      type: Sequelize.STRING(255),
    },
  });
}

async function down({ context: queryInterface }) {
  return queryInterface.dropTable("contactForm");
}

module.exports = { up, down };
