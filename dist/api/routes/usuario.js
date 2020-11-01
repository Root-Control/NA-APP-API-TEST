"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _index = require("./usuario/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usuarioRoutes = _express2.default.Router();

usuarioRoutes.post("/", (0, _index.postUser)());
usuarioRoutes.get("/all/:cantidad", (0, _index.getUsersLimit)());
usuarioRoutes.get("/:id", (0, _index.getUserById)());
usuarioRoutes.put("/", (0, _index.putUser)());
usuarioRoutes.delete("/:id", (0, _index.deleteUser)());

exports.default = usuarioRoutes;