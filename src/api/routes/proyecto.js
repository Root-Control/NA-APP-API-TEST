import express from "express";

import {
  deleteProyecto,
  getProyectoById,
  getProyectoLimit,
  postProyecto,
  putProyecto,
} from "./proyecto/index";

const proyectoRoutes = express.Router();

proyectoRoutes.post("/", postProyecto());
proyectoRoutes.get("/all/:cantidad", getProyectoLimit());
proyectoRoutes.get("/:id", getProyectoById());
proyectoRoutes.put("/", putProyecto());
proyectoRoutes.delete("/:id", deleteProyecto());

export default proyectoRoutes;
