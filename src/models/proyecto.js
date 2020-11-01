module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "proyecto",
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING(255),
      },
      descripcion: {
        type: DataTypes.STRING(255),
      },
      completa: {
        type: DataTypes.TEXT(),
      },
      disponible: {
        type: DataTypes.INTEGER(1),
      },
      createdUsu: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      updatedUsu: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      tableName: "proyecto",
    }
  );
};
