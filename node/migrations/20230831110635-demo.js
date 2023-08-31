"use strict";

const { Sequelize } = require("sequelize");

async function up({ context: queryInterface }) {
  return queryInterface.createTable("demo", {
    id: {
      type: Sequelize.INTEGER(255),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: true,
    },
    name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    note: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
    },
    createdAt:{
      type: Sequelize.STRING(255),
    },
    updatedAt:{
      type: Sequelize.STRING(255),
    }
  });
}

async function down({ context: queryInterface }) {
  return queryInterface.dropTable("demo");
}

module.exports = { up, down };


