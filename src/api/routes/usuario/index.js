import db from "../../../models";
import { logger, defValues } from "../../../utils";

const Model = db.usuario;

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

export const postUser = () => async (req, res) => {
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
      throw new Error("No se creo el usuario");
    }
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getUsersLimit = () => async (req, res) => {
  try {
    const user = req.user;
    const cantidad = Number.parseInt(req.params.cantidad);
    let objs = await Model.findAll({
      order: [["createdAt", "DESC"]],
      where: {
        idEmpresa: user.id,
      },
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "createdUsu",
          "updatedUsu",
          "clave",
        ],
      },
      offset: cantidad,
      limit: 10,
    });
    if (objs) {
      res.status(200).json({ data: objs });
    } else {
      throw new Error("No se encontraron los usuario");
    }
  } catch (e) {
    logger.error(e.message);
    res.status(500).json({ error: e.message });
  }
};

export const getUserById = () => async (req, res) => {
  try {
    const id = req.params.id;
    let objs = await Model.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "createdUsu", "updatedUsu"],
      },
    });
    if (objs) {
      res.status(200).json({ data: objs });
    } else {
      throw new Error("No se encontro el usuario3");
    }
  } catch (e) {
    logger.error(e.message);
    res.status(500).json({ error: e.message });
  }
};

export const putUser = () => async (req, res) => {
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
      throw new Error("No se modifico el usuario especificada");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = () => async (req, res) => {
  const idUser = req.params.id;
  try {
    await Model.destroy({
      where: {
        id: idUser,
      },
    });
    res.status(200).json({ data: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
