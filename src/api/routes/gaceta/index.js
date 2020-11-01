import { logger } from "../../../utils";

import db from "../../../models";
import dayjs from "dayjs";

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

const Model = db.gaceta;
export const getGacetaLimit = () => async (req, res) => {
  try {
    const cantidad = Number.parseInt(req.params.cantidad);
    const gacetas = await Model.findAll({
      attributes: ["id", "link", "titulo", "createdAt"],
      where: {
        disponible: true,
      },
      offset: cantidad,
      limit: 10,
      order: [["createdAt", "ASC"]],
    });

    const data = gacetas.reduce((acc, value) => {
      const newValue = JSON.parse(JSON.stringify(value));
      acc.push({
        ...newValue,
        description: dayjs(newValue.createdAt).format("DD MMM YYYY h:mm a"),
      });
      return acc;
    }, []);

    res.status(200).json({ data });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
