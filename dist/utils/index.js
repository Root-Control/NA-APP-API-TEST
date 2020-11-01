"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.excludeDef = exports.defValues = undefined;

var _bunyan = require("bunyan");

var _bunyan2 = _interopRequireDefault(_bunyan);

var _v = require("uuid/v4");

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defValues = exports.defValues = function defValues(isUpdate) {
  var date = new Date();
  return !isUpdate ? {
    id: (0, _v2.default)(),
    createdAt: date,
    updatedAt: date,
    createdUsu: "",
    updatedUsu: ""
  } : {
    updatedAt: date
  };
};

var excludeDef = exports.excludeDef = function excludeDef() {
  return ["createdAt", "updatedAt", "createdUsu", "updatedUsu"];
};

var logger = exports.logger = _bunyan2.default.createLogger({
  name: "logger",
  src: true,
  serializers: {
    err: _bunyan2.default.stdSerializers.err
  }
});