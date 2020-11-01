module.exports = function (models) {
  const usuario = models.usuario;
  const diputado = models.diputado;
  const estado = models.estado;
  const partido = models.partido;
  const redes = models.redes;
  const comisiones = models.comisiones;
  const personaComision = models.personaComision;
  const tipo = models.tipo;
  const personaCargo = models.personaCargo;
  const persona = models.persona;

  //const noticia = models.noticia;
  //const proyecto = models.proyecto;
  //const comisiones = models.comisiones;

  diputado.hasOne(estado, {
    foreignKey: "idEstado",
  });
  estado.belongsTo(diputado, {
    foreignKey: "idEstado",
  });
  diputado.hasOne(partido, {
    foreignKey: "idPartido",
  });
  estado.belongsTo(partido, {
    foreignKey: "idPartido",
  });
  diputado.hasMany(redes, {
    foreignKey: "idDiputado",
  });
  redes.belongsTo(diputado, {
    foreignKey: "idDiputado",
  });
  /////////////////////
  usuario.hasOne(estado, {
    foreignKey: "idEstado",
  });
  estado.belongsTo(usuario, {
    foreignKey: "idEstado",
  });
  /////////////////////
  personaComision.belongsTo(comisiones, {
    foreignKey: "idComision",
  });
  comisiones.hasMany(personaComision, {
    foreignKey: "idComision",
  });
  personaComision.belongsTo(diputado, {
    foreignKey: "idComision",
  });
  diputado.hasMany(personaComision, {
    foreignKey: "idComision",
  });
  personaComision.belongsTo(persona, {
    foreignKey: "idComision",
  });
  persona.hasMany(personaComision, {
    foreignKey: "idComision",
  });
  /////////////////////
  personaCargo.belongsTo(tipo, {
    foreignKey: "idCargo",
  });
  tipo.hasMany(personaCargo, {
    foreignKey: "idCargo",
  });
};
