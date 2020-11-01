"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./noticia/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noticiaRoutes = _express2.default.Router();

//noticiaRoutes.post("/", postUser());
noticiaRoutes.get("/all/:cantidad", (0, _index.getNoticiaLimit)());
noticiaRoutes.get("/:id", (0, _index.getNoticiaById)());
//noticiaRoutes.put("/", putUser());
//noticiaRoutes.delete("/:id", deleteUser());

exports.default = noticiaRoutes;