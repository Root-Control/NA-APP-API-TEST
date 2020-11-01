module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "usuario",
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(255),
      },
      apellido: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      telefono: {
        type: DataTypes.STRING(255),
      },
      clave: {
        type: DataTypes.STRING(255),
      },
      nacimiento: {
        type: DataTypes.DATE(),
      },
      idEstado: {
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
      tableName: "usuario",
    }
  );
};
