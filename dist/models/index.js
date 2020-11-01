"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = {};

var conf = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: function logging(s) {
    return (0, _debug2.default)(s);
  },
  operatorsAliases: false
};

var sequelize = new _sequelize2.default(conf);

db["personaCargo"] = sequelize["import"](_path2.default.join(__dirname, "personaCargo.js"));
db["personaComision"] = sequelize["import"](_path2.default.join(__dirname, "personaComision.js"));
db["persona"] = sequelize["import"](_path2.default.join(__dirname, "persona.js"));
db["gaceta"] = sequelize["import"](_path2.default.join(__dirname, "gaceta.js"));
db["comisiones"] = sequelize["import"](_path2.default.join(__dirname, "comisiones.js"));
db["tipo"] = sequelize["import"](_path2.default.join(__dirname, "tipo.js"));
db["diputado"] = sequelize["import"](_path2.default.join(__dirname, "diputado.js"));
db["estado"] = sequelize["import"](_path2.default.join(__dirname, "estado.js"));
db["noticia"] = sequelize["import"](_path2.default.join(__dirname, "noticia.js"));
db["partido"] = sequelize["import"](_path2.default.join(__dirname, "partido.js"));
db["proyecto"] = sequelize["import"](_path2.default.join(__dirname, "proyecto.js"));
db["redes"] = sequelize["import"](_path2.default.join(__dirname, "redes.js"));
db["usuario"] = sequelize["import"](_path2.default.join(__dirname, "usuario.js"));

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

require("../utils/associations")(db);

db.sequelize = sequelize;

module.exports = db;