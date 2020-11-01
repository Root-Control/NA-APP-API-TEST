import { logger, excludeDef } from "../../../utils";

import db from "../../../models";
import dayjs from "dayjs";

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

const Model = db.noticia;

// no tendra limit devolvera toda la data de los ultimos 365dias
export const getNoticiaLimit = () => async (req, res) => {
  try {
    const cantidad = Number.parseInt(req.params.cantidad);
    const noticias = await Model.findAll({
      attributes: ["id", "img", "title", "createdAt"],
      where: {
        disponible: true,
      },
      offset: cantidad,
      limit: 10,
      order: [["createdAt", "ASC"]],
    });

    const data = noticias.reduce((acc, value) => {
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

export const getNoticiaById = () => async (req, res) => {
  try {
    const idNoticia = req.params.id;
    const noticia = await Model.findOne({
      attributes: {
        exclude: ["updatedAt", "createdUsu", "updatedUsu"],
      },
      where: {
        id: idNoticia,
      },
    });

    const data = {
      ...JSON.parse(JSON.stringify(noticia)),
      date: dayjs(noticia.createdAt).format("DD MMM YYYY"),
      time: dayjs(noticia.createdAt).format("h:mm a"),
    };

    res.status(200).json({ data });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
