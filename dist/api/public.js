"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _usuario = require("./routes/usuario");

var _usuario2 = _interopRequireDefault(_usuario);

var _diputado = require("./routes/diputado");

var _diputado2 = _interopRequireDefault(_diputado);

var _comision = require("./routes/comision");

var _comision2 = _interopRequireDefault(_comision);

var _tipo = require("./routes/tipo");

var _tipo2 = _interopRequireDefault(_tipo);

var _proyecto = require("./routes/proyecto");

var _proyecto2 = _interopRequireDefault(_proyecto);

var _noticia = require("./routes/noticia");

var _noticia2 = _interopRequireDefault(_noticia);

var _gaceta = require("./routes/gaceta");

var _gaceta2 = _interopRequireDefault(_gaceta);

var _partido = require("./routes/partido");

var _partido2 = _interopRequireDefault(_partido);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var publicRoutes = _express2.default.Router();

publicRoutes.use("/usuario", _usuario2.default);
publicRoutes.use("/diputado", _diputado2.default);
publicRoutes.use("/comision", _comision2.default);
publicRoutes.use("/tipo", _tipo2.default);
publicRoutes.use("/proyecto", _proyecto2.default);
publicRoutes.use("/noticia", _noticia2.default);
publicRoutes.use("/gaceta", _gaceta2.default);
publicRoutes.use("/partido", _partido2.default);

exports.default = publicRoutes;