module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "gaceta",
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING(255),
      },
      link: {
        type: DataTypes.INTEGER(1),
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
      tableName: "gaceta",
    }
  );
};
