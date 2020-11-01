import { logger, excludeDef } from "../../../utils";

import db from "../../../models";

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

const Model = db.tipo;

export const getAllTypeOf = () => async (req, res) => {
  try {
    const idPadre = req.params.idPadre;
    const data = await Model.findAll({
      attributes: ["id", "idPadre", "descripcion"],
      where: {
        idPadre,
      },
      order: [["descripcion", "ASC"]],
    });
    res.status(200).json({ data });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getComisionById = () => async (req, res) => {
  try {
    const idComision = req.params.id;
    const data = await Model.findOne({
      attributes: {
        exclude: excludeDef(),
      },
      where: {
        id: idComision,
      },
    });
    res.status(200).json({ data });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
