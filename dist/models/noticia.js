"use strict";

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("noticia", {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255)
    },
    descripcion: {
      type: DataTypes.STRING(255)
    },
    completa: {
      type: DataTypes.TEXT()
    },
    img: {
      type: DataTypes.STRING(255)
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
    tableName: "noticia"
  });
};