"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePassword = exports.singUp = exports.loginUser = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require("../../../utils");

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require("../../../config");

var _config2 = _interopRequireDefault(_config);

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

var Model = _models2.default.usuario;

function buildToken(data) {
  return _jsonwebtoken2.default.sign({ user: data }, _config2.default.secretApi, { expiresIn: "600d" });
}

var loginUser = exports.loginUser = function loginUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var body, data, bt;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              body = req.body;
              _context.next = 4;
              return Model.findOne({
                attributes: ["id", "nombre"],
                where: {
                  email: body.email,
                  clave: body.clave,
                  disponible: true
                }
              });

            case 4:
              data = _context.sent;

              if (data) {
                bt = buildToken(data);

                res.status(200).json({ data: data, token: bt });
              } else {
                res.status(200).json({ data: "Error en la combinacion de usuario y clave" });
              }
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              _utils.logger.error(_context.t0.message);
              res.status(500).json({ error: _context.t0.message });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var singUp = exports.singUp = function singUp() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var data, def, values, _data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = req.body;
              def = (0, _utils.defValues)();
              values = _extends({}, data, def, {
                disponible: true
              });
              _context2.prev = 3;
              _context2.next = 6;
              return Model.create(values);

            case 6:
              _data = _context2.sent;

              if (!_data) {
                _context2.next = 11;
                break;
              }

              res.status(200).json({ data: _data });
              _context2.next = 12;
              break;

            case 11:
              throw new Error("No se creo el usuario");

            case 12:
              _context2.next = 18;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](3);

              _utils.logger.error(_context2.t0.message);
              res.status(500).json({ error: _context2.t0.message });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[3, 14]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var changePassword = exports.changePassword = function changePassword() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var body, values, data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              body = req.body;
              values = { clave: body.clave };
              _context3.next = 5;
              return Model.update(values, {
                where: {
                  id: body.id
                }
              });

            case 5:
              data = _context3.sent;

              if (data) {
                res.status(200).json({ data: data });
              } else {
                res.status(200).json({ data: "no se actualizo la contraseña" });
              }
              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);

              _utils.logger.error(_context3.t0.message);
              res.status(500).json({ error: _context3.t0.message });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 9]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};