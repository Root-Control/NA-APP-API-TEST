"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./diputado/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var diputadoRoutes = _express2.default.Router();

//diputadoRoutes.post("/", postUser());
diputadoRoutes.post("/all/filter", (0, _index.getDiputadoFilterLimit)());
diputadoRoutes.get("/all/:cantidad", (0, _index.getDiputadoLimit)());
diputadoRoutes.get("/:id", (0, _index.getDiputadoById)());
//diputadoRoutes.put("/", putUser());
//diputadoRoutes.delete("/:id", deleteUser());

exports.default = diputadoRoutes;