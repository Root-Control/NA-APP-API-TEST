"use strict";

module.exports = function (models) {
  var usuario = models.usuario;
  var diputado = models.diputado;
  var estado = models.estado;
  var partido = models.partido;
  var redes = models.redes;
  var comisiones = models.comisiones;
  var personaComision = models.personaComision;
  var tipo = models.tipo;
  var personaCargo = models.personaCargo;
  var persona = models.persona;

  //const noticia = models.noticia;
  //const proyecto = models.proyecto;
  //const comisiones = models.comisiones;

  diputado.hasOne(estado, {
    foreignKey: "idEstado"
  });
  estado.belongsTo(diputado, {
    foreignKey: "idEstado"
  });
  diputado.hasOne(partido, {
    foreignKey: "idPartido"
  });
  estado.belongsTo(partido, {
    foreignKey: "idPartido"
  });
  diputado.hasMany(redes, {
    foreignKey: "idDiputado"
  });
  redes.belongsTo(diputado, {
    foreignKey: "idDiputado"
  });
  /////////////////////
  usuario.hasOne(estado, {
    foreignKey: "idEstado"
  });
  estado.belongsTo(usuario, {
    foreignKey: "idEstado"
  });
  /////////////////////
  personaComision.belongsTo(comisiones, {
    foreignKey: "idComision"
  });
  comisiones.hasMany(personaComision, {
    foreignKey: "idComision"
  });
  personaComision.belongsTo(diputado, {
    foreignKey: "idComision"
  });
  diputado.hasMany(personaComision, {
    foreignKey: "idComision"
  });
  personaComision.belongsTo(persona, {
    foreignKey: "idComision"
  });
  persona.hasMany(personaComision, {
    foreignKey: "idComision"
  });
  /////////////////////
  personaCargo.belongsTo(tipo, {
    foreignKey: "idCargo"
  });
  tipo.hasMany(personaCargo, {
    foreignKey: "idCargo"
  });
};