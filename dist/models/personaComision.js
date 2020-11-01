"use strict";

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("personaComision", {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    idPersona: {
      type: DataTypes.STRING(255)
    },
    idComision: {
      type: DataTypes.STRING(255)
    },
    createdUsu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updatedUsu: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: "personaComision"
  });
};