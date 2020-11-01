module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "tipo",
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      idPadre: {
        type: DataTypes.STRING(255),
      },
      descripcion: {
        type: DataTypes.STRING(255),
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
      tableName: "tipo",
    }
  );
};
