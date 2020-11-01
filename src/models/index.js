import path from "path";
import Sequelize from "sequelize";
import debug from "debug";

const db = {};

const conf = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: (s) => debug(s),
  operatorsAliases: false,
};

const sequelize = new Sequelize(conf);

db["personaCargo"] = sequelize["import"](
  path.join(__dirname, "personaCargo.js")
);
db["personaComision"] = sequelize["import"](
  path.join(__dirname, "personaComision.js")
);
db["persona"] = sequelize["import"](path.join(__dirname, "persona.js"));
db["gaceta"] = sequelize["import"](path.join(__dirname, "gaceta.js"));
db["comisiones"] = sequelize["import"](path.join(__dirname, "comisiones.js"));
db["tipo"] = sequelize["import"](path.join(__dirname, "tipo.js"));
db["diputado"] = sequelize["import"](path.join(__dirname, "diputado.js"));
db["estado"] = sequelize["import"](path.join(__dirname, "estado.js"));
db["noticia"] = sequelize["import"](path.join(__dirname, "noticia.js"));
db["partido"] = sequelize["import"](path.join(__dirname, "partido.js"));
db["proyecto"] = sequelize["import"](path.join(__dirname, "proyecto.js"));
db["redes"] = sequelize["import"](path.join(__dirname, "redes.js"));
db["usuario"] = sequelize["import"](path.join(__dirname, "usuario.js"));

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

require("../utils/associations")(db);

db.sequelize = sequelize;

module.exports = db;
