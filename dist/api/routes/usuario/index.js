"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.putUser = exports.getUserById = exports.getUsersLimit = exports.postUser = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Model = _models2.default.usuario;

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

var postUser = exports.postUser = function postUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var data, def, values, _data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = req.body;
              def = (0, _utils.defValues)();
              values = _extends({}, data, def, {
                disponible: true
              });
              _context.prev = 3;
              _context.next = 6;
              return Model.create(values);

            case 6:
              _data = _context.sent;

              if (!_data) {
                _context.next = 11;
                break;
              }

              res.status(200).json({ data: _data });
              _context.next = 12;
              break;

            case 11:
              throw new Error("No se creo el usuario");

            case 12:
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);

              _utils.logger.error(_context.t0.message);
              res.status(500).json({ error: _context.t0.message });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[3, 14]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getUsersLimit = exports.getUsersLimit = function getUsersLimit() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var user, cantidad, objs;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              user = req.user;
              cantidad = Number.parseInt(req.params.cantidad);
              _context2.next = 5;
              return Model.findAll({
                order: [["createdAt", "DESC"]],
                where: {
                  idEmpresa: user.id
                },
                attributes: {
                  exclude: ["createdAt", "updatedAt", "createdUsu", "updatedUsu", "clave"]
                },
                offset: cantidad,
                limit: 10
              });

            case 5:
              objs = _context2.sent;

              if (!objs) {
                _context2.next = 10;
                break;
              }

              res.status(200).json({ data: objs });
              _context2.next = 11;
              break;

            case 10:
              throw new Error("No se encontraron los usuario");

            case 11:
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);

              _utils.logger.error(_context2.t0.message);
              res.status(500).json({ error: _context2.t0.message });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 13]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var getUserById = exports.getUserById = function getUserById() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var id, objs;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return Model.findOne({
                where: {
                  id: id
                },
                attributes: {
                  exclude: ["createdAt", "updatedAt", "createdUsu", "updatedUsu"]
                }
              });

            case 4:
              objs = _context3.sent;

              if (!objs) {
                _context3.next = 9;
                break;
              }

              res.status(200).json({ data: objs });
              _context3.next = 10;
              break;

            case 9:
              throw new Error("No se encontro el usuario3");

            case 10:
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);

              _utils.logger.error(_context3.t0.message);
              res.status(500).json({ error: _context3.t0.message });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 12]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var putUser = exports.putUser = function putUser() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
      var data, values, upd;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              data = req.body;
              values = Object.assign({}, data);
              _context4.prev = 2;
              _context4.next = 5;
              return Model.update(values, {
                where: {
                  id: data.id
                }
              });

            case 5:
              upd = _context4.sent;

              if (!upd) {
                _context4.next = 10;
                break;
              }

              res.status(200).json({ data: upd });
              _context4.next = 11;
              break;

            case 10:
              throw new Error("No se modifico el usuario especificada");

            case 11:
              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](2);

              res.status(500).json({ error: _context4.t0.message });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[2, 13]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var deleteUser = exports.deleteUser = function deleteUser() {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
      var idUser;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              idUser = req.params.id;
              _context5.prev = 1;
              _context5.next = 4;
              return Model.destroy({
                where: {
                  id: idUser
                }
              });

            case 4:
              res.status(200).json({ data: true });
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);

              res.status(500).json({ error: _context5.t0.message });

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[1, 7]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }();
};