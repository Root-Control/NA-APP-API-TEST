"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./partido/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var partidoRoutes = _express2.default.Router();

//partidoRoutes.post("/", postUser());
partidoRoutes.get("/all", (0, _index.getAllPartidos)());
//partidoRoutes.get("/:id", getComisionById());
//partidoRoutes.put("/", putUser());
//partidoRoutes.delete("/:id", deleteUser());

exports.default = partidoRoutes;