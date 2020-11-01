"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./gaceta/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gacetaRoutes = _express2.default.Router();

//gacetaRoutes.post("/", postUser());
gacetaRoutes.get("/all/:cantidad", (0, _index.getGacetaLimit)());
//gacetaRoutes.get("/:id", getComisionById());
//gacetaRoutes.put("/", putUser());
//gacetaRoutes.delete("/:id", deleteUser());

exports.default = gacetaRoutes;