"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _login = require("./routes/login");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authRoutes = _express2.default.Router();

authRoutes.post("/", (0, _login.loginUser)());
authRoutes.post("/sing-up", (0, _login.singUp)());
authRoutes.put("/change-password", (0, _login.changePassword)());

exports.default = authRoutes;