module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "diputado",
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      identificacion: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      nombre: {
        type: DataTypes.STRING(255),
      },
      apellido: {
        type: DataTypes.STRING(255),
      },
      img: {
        type: DataTypes.STRING(255),
      },
      imgCompleta: {
        type: DataTypes.STRING(255),
      },
      descripcion: {
        type: DataTypes.STRING(255),
      },
      biografia: {
        type: DataTypes.TEXT(),
      },
      disponible: {
        type: DataTypes.INTEGER(1),
      },
      idPartido: {
        type: DataTypes.STRING(255),
      },
      idEstado: {
        type: DataTypes.STRING(255),
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
      tableName: "diputado",
    }
  );
};
