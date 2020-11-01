"use strict";

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("votos", {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    idDiputado: {
      type: DataTypes.STRING(255)
    },
    idProyecto: {
      type: DataTypes.STRING(255)
    },
    voto: {
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
    tableName: "votos"
  });
};