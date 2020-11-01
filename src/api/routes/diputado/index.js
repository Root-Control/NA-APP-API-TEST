import { logger, excludeDef } from "../../../utils";

import db from "../../../models";

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

const Model = db.diputado;
const ModelPersonaCargo = db.personaCargo;
const ModelPersonaComision = db.personaComision;
const ModelComisiones = db.comisiones;
const ModelTipo = db.tipo;
const ModelRedes = db.redes;

export const getDiputadoLimit = () => async (req, res) => {
  try {
    const cantidad = Number.parseInt(req.params.cantidad);
    const data = await Model.findAll({
      attributes: ["id", "nombre", "apellido", "img"],
      offset: cantidad,
      limit: 10,
      where: {
        disponible: true,
        tipo: 1,
      },
      order: [["nombre", "ASC"]],
    });
    const newData = data.reduce((acc, value) => {
      const newValue = JSON.parse(JSON.stringify(value));
      acc.push({
        id: newValue.id,
        img: newValue.img,
        title: `${newValue.nombre} ${newValue.apellido}`,
        subTitle: `ajustar esto`,
      });
      return acc;
    }, []);
    res.status(200).json({ data: newData });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getDiputadoFilterLimit = () => async (req, res) => {
  try {
    const cantidad = Number.parseInt(req.body.cantidad);
    const where = req.body.where;
    const data = await Model.findAll({
      attributes: ["id", "nombre", "apellido", "img"],
      offset: cantidad,
      limit: 10,
      where: {
        disponible: true,
        tipo: 1,
        ...where,
      },
      order: [["nombre", "ASC"]],
    });
    const newData = data.reduce((acc, value) => {
      const newValue = JSON.parse(JSON.stringify(value));
      acc.push({
        id: newValue.id,
        img: newValue.img,
        title: `${newValue.nombre} ${newValue.apellido}`,
        subTitle: `ajustar esto`,
      });
      return acc;
    }, []);
    res.status(200).json({ data: newData });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getDiputadoById = () => async (req, res) => {
  try {
    const idDiputado = req.params.id;

    const diputado = await Model.findOne({
      attributes: {
        exclude: excludeDef(),
      },
      where: {
        id: idDiputado,
      },
    });

    const cargos = await ModelPersonaCargo.findAll({
      attributes: ["id"],
      include: [
        {
          model: ModelTipo,
          attributes: ["descripcion"],
        },
      ],
      where: {
        idPersona: idDiputado,
      },
    });

    const comisiones = await ModelPersonaComision.findAll({
      attributes: ["id"],
      include: [
        {
          model: ModelComisiones,
          attributes: ["titulo"],
        },
      ],
      where: {
        idPersona: idDiputado,
      },
    });

    const redes = await ModelRedes.findAll({
      attributes: ["tipo", "cuenta"],
      where: {
        idDiputado,
      },
    });

    const newData = {
      ...JSON.parse(JSON.stringify(diputado)),
      title: `${diputado.nombre} ${diputado.apellido}`,
      subTitle: `ajustar esto`,
      cargos,
      comisiones,
      redes,
    };
    res.status(200).json({ data: newData });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
