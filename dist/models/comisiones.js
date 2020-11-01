"use strict";

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("comisiones", {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(255)
    },
    titulo: {
      type: DataTypes.STRING(255)
    },
    descripcion: {
      type: DataTypes.STRING(255)
    },
    img: {
      type: DataTypes.STRING(255)
    },
    contenido: {
      type: DataTypes.TEXT()
    },
    link: {
      type: DataTypes.STRING(255)
    },
    disponible: {
      type: DataTypes.INTEGER(1)
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
    tableName: "comisiones"
  });
};