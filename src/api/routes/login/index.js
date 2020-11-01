import { defValues, logger } from "../../../utils";

import jwt from "jsonwebtoken";

import config from "../../../config";
import db from "../../../models";

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

const Model = db.usuario;

function buildToken(data) {
  return jwt.sign({ user: data }, config.secretApi, { expiresIn: "600d" });
}

export const loginUser = () => async (req, res) => {
  try {
    const body = req.body;
    const data = await Model.findOne({
      attributes: ["id", "nombre"],
      where: {
        email: body.email,
        clave: body.clave,
        disponible: true,
      },
    });
    if (data) {
      const bt = buildToken(data);
      res.status(200).json({ data: data, token: bt });
    } else {
      res
        .status(200)
        .json({ data: "Error en la combinacion de usuario y clave" });
    }
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const singUp = () => async (req, res) => {
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

export const changePassword = () => async (req, res) => {
  try {
    const body = req.body;
    const values = { clave: body.clave };

    const data = await Model.update(values, {
      where: {
        id: body.id,
      },
    });
    if (data) {
      res.status(200).json({ data: data });
    } else {
      res.status(200).json({ data: "no se actualizo la contraseña" });
    }
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
