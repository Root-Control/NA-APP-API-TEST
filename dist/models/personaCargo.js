"use strict";

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("personaCargo", {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    idPersona: {
      type: DataTypes.STRING(255)
    },
    idCargo: {
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
    tableName: "personaCargo"
  });
};