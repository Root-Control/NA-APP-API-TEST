import express from "express";

import { getGacetaLimit } from "./gaceta/index";

const gacetaRoutes = express.Router();

//gacetaRoutes.post("/", postUser());
gacetaRoutes.get("/all/:cantidad", getGacetaLimit());
//gacetaRoutes.get("/:id", getComisionById());
//gacetaRoutes.put("/", putUser());
//gacetaRoutes.delete("/:id", deleteUser());

export default gacetaRoutes;
