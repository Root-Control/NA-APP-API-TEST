import { logger, excludeDef } from "../../../utils";

import db from "../../../models";
import dayjs from "dayjs";

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Model = db.comisiones;
const ModelTipo = db.tipo;
const ModelDiputado = db.diputado;
const ModelPersonaComision = db.personaComision;

// no tendra limit devolvera toda la data de los ultimos 365dias
export const getComisionesLimit = () => async (req, res) => {
  try {
    console.info("1111");
    const tipoComision = await ModelTipo.findAll({
      attributes: ["id", "descripcion"],
      where: {
        idPadre: 1,
        disponible: true,
      },
      order: [["id", "ASC"]],
    });

    const start = dayjs().add(-365, "day").toDate();

    const comisiones = await Model.findAll({
      attributes: ["id", "tipo", "titulo", "descripcion"],
      where: {
        disponible: true,
        createdAt: {
          [Op.gte]: start,
        },
      },
      order: [["tipo", "ASC"]],
    });

    const keyBy = (arr, key) =>
      arr.reduce((acc, element) => {
        if (!acc[element[key]]) {
          acc[element[key]] = [];
        }
        acc[element[key]].push(element);
        return acc;
      }, {});

    const keyedComisiones = keyBy(comisiones, "tipo");
    const algo = tipoComision.map((y) => ({
      ...JSON.parse(JSON.stringify(y)),
      comisiones: keyedComisiones[y.id],
    }));
    res.status(200).json({ data: algo });
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

    const personasComision = await ModelPersonaComision.findAll({
      include: [
        {
          model: ModelDiputado,
          attributes: ["id", "nombre", "apellido", "img", "descripcion"],
        },
      ],
      where: {
        idComision: idComision,
      },
      attributes: ["id"],
    });

    const diputados = personasComision.reduce((acc, value) => {
      const newValue = JSON.parse(JSON.stringify(value));
      acc.push({
        id: newValue.diputado.id,
        img: newValue.diputado.img,
        title: `${newValue.diputado.nombre} ${newValue.diputado.apellido}`,
        subTitle: `ajustar esto`,
      });
      return acc;
    }, []);

    res.status(200).json({ data, diputados });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
