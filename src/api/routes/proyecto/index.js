import db from "../../../models";
import { logger, defValues, excludeDef } from "../../../utils";

const Model = db.proyecto;

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

export const postProyecto = () => async (req, res) => {
  const data = req.body;
  const def = defValues();
  const values = {
    ...data,
    ...def,
    disponible: true,
  };
  try {
    let data = await Model.create(values);
    if (data) {
      res.status(200).json({ data: data });
    } else {
      throw new Error("No se creo el Proyecto");
    }
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getProyectoLimit = () => async (req, res) => {
  try {
    //const user = req.user;
    const cantidad = Number.parseInt(req.params.cantidad);
    let data = await Model.findAll({
      order: [["createdAt", "DESC"]],
      where: {
        disponible: true,
      },
      attributes: {
        exclude: excludeDef(),
      },
      offset: cantidad,
      limit: 10,
    });
    if (data) {
      res.status(200).json({ data });
    } else {
      throw new Error("No se encontraron los proyectos");
    }
  } catch (e) {
    logger.error(e.message);
    res.status(500).json({ error: e.message });
  }
};

export const getProyectoById = () => async (req, res) => {
  try {
    const id = req.params.id;
    let objs = await Model.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: excludeDef(),
      },
    });
    if (objs) {
      res.status(200).json({ data: objs });
    } else {
      throw new Error("No se encontro el proyecto");
    }
  } catch (e) {
    logger.error(e.message);
    res.status(500).json({ error: e.message });
  }
};

export const putProyecto = () => async (req, res) => {
  const data = req.body;
  const values = Object.assign({}, data);
  try {
    const upd = await Model.update(values, {
      where: {
        id: data.id,
      },
    });
    if (upd) {
      res.status(200).json({ data: upd });
    } else {
      throw new Error("No se modifico el proyecto especificada");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProyecto = () => async (req, res) => {
  const idProyecto = req.params.id;
  try {
    await Model.destroy({
      where: {
        id: idProyecto,
      },
    });
    res.status(200).json({ data: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
