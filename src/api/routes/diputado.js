import express from "express";

import {
  getDiputadoLimit,
  getDiputadoById,
  getDiputadoFilterLimit,
} from "./diputado/index";

const diputadoRoutes = express.Router();

//diputadoRoutes.post("/", postUser());
diputadoRoutes.post("/all/filter", getDiputadoFilterLimit());
diputadoRoutes.get("/all/:cantidad", getDiputadoLimit());
diputadoRoutes.get("/:id", getDiputadoById());
//diputadoRoutes.put("/", putUser());
//diputadoRoutes.delete("/:id", deleteUser());

export default diputadoRoutes;
