"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./proyecto/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proyectoRoutes = _express2.default.Router();

proyectoRoutes.post("/", (0, _index.postProyecto)());
proyectoRoutes.get("/all/:cantidad", (0, _index.getProyectoLimit)());
proyectoRoutes.get("/:id", (0, _index.getProyectoById)());
proyectoRoutes.put("/", (0, _index.putProyecto)());
proyectoRoutes.delete("/:id", (0, _index.deleteProyecto)());

exports.default = proyectoRoutes;