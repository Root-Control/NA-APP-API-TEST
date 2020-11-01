"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./tipo/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tipoRoutes = _express2.default.Router();

//tipoRoutes.post("/", postUser());
tipoRoutes.get("/all-id-padre/:idPadre", (0, _index.getAllTypeOf)());
//tipoRoutes.get("/:id", getComisionById());
//tipoRoutes.put("/", putUser());
//tipoRoutes.delete("/:id", deleteUser());

exports.default = tipoRoutes;