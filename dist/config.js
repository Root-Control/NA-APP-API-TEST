"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var config = {
  port: process.env.PORT || 4400,
  nodeEnv: process.env.NODE_ENV || "development",
  secretApi: process.env.SECRET_API || "SECRET_API_123_TEST",
  mpAccessToken: process.env.MP_ACCESS_TOKEN || "",
  emailUser: process.env.EMAIL_USER || "",
  emailDefTo: process.env.EMAIL_DEFT_TO || "",
  emailPass: process.env.EMAIL_PASS || "",
  emailAlias: process.env.EMAIL_ALIAS || ""
};

exports.default = config;