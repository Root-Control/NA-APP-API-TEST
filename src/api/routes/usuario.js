import express from "express";

import {
  deleteUser,
  getUserById,
  getUsersLimit,
  postUser,
  putUser,
} from "./usuario/index";

const usuarioRoutes = express.Router();

usuarioRoutes.post("/", postUser());
usuarioRoutes.get("/all/:cantidad", getUsersLimit());
usuarioRoutes.get("/:id", getUserById());
usuarioRoutes.put("/", putUser());
usuarioRoutes.delete("/:id", deleteUser());

export default usuarioRoutes;
