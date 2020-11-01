"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./comision/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var comisionRoutes = _express2.default.Router();

//comisionRoutes.post("/", postUser());
comisionRoutes.get("/all/:cantidad", (0, _index.getComisionesLimit)());
comisionRoutes.get("/:id", (0, _index.getComisionById)());
//comisionRoutes.put("/", putUser());
//comisionRoutes.delete("/:id", deleteUser());

exports.default = comisionRoutes;