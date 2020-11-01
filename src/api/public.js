import express from "express";

import usuarioRoutes from "./routes/usuario";
import diputadoRoutes from "./routes/diputado";
import comisionRoutes from "./routes/comision";
import tipoRoutes from "./routes/tipo";
import proyectoRoutes from "./routes/proyecto";
import noticiaRoutes from "./routes/noticia";
import gacetaRoutes from "./routes/gaceta";
import partidoRoutes from "./routes/partido";

const publicRoutes = express.Router();

publicRoutes.use("/usuario", usuarioRoutes);
publicRoutes.use("/diputado", diputadoRoutes);
publicRoutes.use("/comision", comisionRoutes);
publicRoutes.use("/tipo", tipoRoutes);
publicRoutes.use("/proyecto", proyectoRoutes);
publicRoutes.use("/noticia", noticiaRoutes);
publicRoutes.use("/gaceta", gacetaRoutes);
publicRoutes.use("/partido", partidoRoutes);

export default publicRoutes;
