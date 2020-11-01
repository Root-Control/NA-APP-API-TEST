import express from "express";

import { getAllPartidos } from "./partido/index";

const partidoRoutes = express.Router();

//partidoRoutes.post("/", postUser());
partidoRoutes.get("/all", getAllPartidos());
//partidoRoutes.get("/:id", getComisionById());
//partidoRoutes.put("/", putUser());
//partidoRoutes.delete("/:id", deleteUser());

export default partidoRoutes;
