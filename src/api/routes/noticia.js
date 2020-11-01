import express from "express";

import { getNoticiaLimit, getNoticiaById } from "./noticia/index";

const noticiaRoutes = express.Router();

//noticiaRoutes.post("/", postUser());
noticiaRoutes.get("/all/:cantidad", getNoticiaLimit());
noticiaRoutes.get("/:id", getNoticiaById());
//noticiaRoutes.put("/", putUser());
//noticiaRoutes.delete("/:id", deleteUser());

export default noticiaRoutes;
