import express from "express";
import jwt from "jsonwebtoken";

import { logger } from "../utils";
import config from "../config";
import db from "../models";



const apiRoutes = express.Router();

const ModelUsuario = db.usuario;

apiRoutes.get("/", (req, res) => {
  res.status(200).json({
    data: {
      title: "API ROOT",
      message:
        "this is the root of the API you need to login to access the API!",
    },
  });
});

apiRoutes.use("/", async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, config.secretApi, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Authentication failed." });
      }

      let user;
      if (decoded.user.admin) {
      } else {
        console.info("decoded.user.email", decoded.user.id);
        user = await ModelUsuario.findOne({
          attributes: ["id"],
          where: {
            id: decoded.user.id,
          },
        });
      }

      if (!user) {
        return res
          .status(500)
          .json({ error: "Could not validate this user.." });
      }

      req.user = user;
      next();
    });
  } else {
    logger.error("No token provided.");

    return res.status(403).json({
      error: "No token provided.",
    });
  }
});


apiRoutes.use((req, res, next) => {
  if (!req.route) {
    return res.status(404).json({
      error: "Oooops! 404",
    });
  }

  next();
});

export default apiRoutes;
