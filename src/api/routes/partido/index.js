import { logger } from "../../../utils";

import db from "../../../models";

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

const Model = db.partido;

export const getAllPartidos = () => async (req, res) => {
  try {
    const data = await Model.findAll({
      attributes: ["id", "descripcion"],
      where: {
        disponible: true,
      },
      order: [["descripcion", "ASC"]],
    });
    res.status(200).json({ data });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
