import express from "express";

import { getAllTypeOf } from "./tipo/index";

const tipoRoutes = express.Router();

//tipoRoutes.post("/", postUser());
tipoRoutes.get("/all-id-padre/:idPadre", getAllTypeOf());
//tipoRoutes.get("/:id", getComisionById());
//tipoRoutes.put("/", putUser());
//tipoRoutes.delete("/:id", deleteUser());

export default tipoRoutes;
