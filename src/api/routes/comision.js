import express from "express";

import { getComisionesLimit, getComisionById } from "./comision/index";

const comisionRoutes = express.Router();

//comisionRoutes.post("/", postUser());
comisionRoutes.get("/all/:cantidad", getComisionesLimit());
comisionRoutes.get("/:id", getComisionById());
//comisionRoutes.put("/", putUser());
//comisionRoutes.delete("/:id", deleteUser());

export default comisionRoutes;
