"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDiputadoById = exports.getDiputadoFilterLimit = exports.getDiputadoLimit = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require("../../../utils");

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

var Model = _models2.default.diputado;
var ModelPersonaCargo = _models2.default.personaCargo;
var ModelPersonaComision = _models2.default.personaComision;
var ModelComisiones = _models2.default.comisiones;
var ModelTipo = _models2.default.tipo;
var ModelRedes = _models2.default.redes;

var getDiputadoLimit = exports.getDiputadoLimit = function getDiputadoLimit() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var cantidad, data, newData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              cantidad = Number.parseInt(req.params.cantidad);
              _context.next = 4;
              return Model.findAll({
                attributes: ["id", "nombre", "apellido", "img"],
                offset: cantidad,
                limit: 10,
                where: {
                  disponible: true,
                  tipo: 1
                },
                order: [["nombre", "ASC"]]
              });

            case 4:
              data = _context.sent;
              newData = data.reduce(function (acc, value) {
                var newValue = JSON.parse(JSON.stringify(value));
                acc.push({
                  id: newValue.id,
                  img: newValue.img,
                  title: newValue.nombre + " " + newValue.apellido,
                  subTitle: "ajustar esto"
                });
                return acc;
              }, []);

              res.status(200).json({ data: newData });
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              _utils.logger.error(_context.t0.message);
              res.status(500).json({ error: _context.t0.message });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getDiputadoFilterLimit = exports.getDiputadoFilterLimit = function getDiputadoFilterLimit() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var cantidad, where, data, newData;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              cantidad = Number.parseInt(req.body.cantidad);
              where = req.body.where;
              _context2.next = 5;
              return Model.findAll({
                attributes: ["id", "nombre", "apellido", "img"],
                offset: cantidad,
                limit: 10,
                where: _extends({
                  disponible: true,
                  tipo: 1
                }, where),
                order: [["nombre", "ASC"]]
              });

            case 5:
              data = _context2.sent;
              newData = data.reduce(function (acc, value) {
                var newValue = JSON.parse(JSON.stringify(value));
                acc.push({
                  id: newValue.id,
                  img: newValue.img,
                  title: newValue.nombre + " " + newValue.apellido,
                  subTitle: "ajustar esto"
                });
                return acc;
              }, []);

              res.status(200).json({ data: newData });
              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);

              _utils.logger.error(_context2.t0.message);
              res.status(500).json({ error: _context2.t0.message });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 10]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var getDiputadoById = exports.getDiputadoById = function getDiputadoById() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var idDiputado, diputado, cargos, comisiones, redes, newData;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              idDiputado = req.params.id;
              _context3.next = 4;
              return Model.findOne({
                attributes: {
                  exclude: (0, _utils.excludeDef)()
                },
                where: {
                  id: idDiputado
                }
              });

            case 4:
              diputado = _context3.sent;
              _context3.next = 7;
              return ModelPersonaCargo.findAll({
                attributes: ["id"],
                include: [{
                  model: ModelTipo,
                  attributes: ["descripcion"]
                }],
                where: {
                  idPersona: idDiputado
                }
              });

            case 7:
              cargos = _context3.sent;
              _context3.next = 10;
              return ModelPersonaComision.findAll({
                attributes: ["id"],
                include: [{
                  model: ModelComisiones,
                  attributes: ["titulo"]
                }],
                where: {
                  idPersona: idDiputado
                }
              });

            case 10:
              comisiones = _context3.sent;
              _context3.next = 13;
              return ModelRedes.findAll({
                attributes: ["tipo", "cuenta"],
                where: {
                  idDiputado: idDiputado
                }
              });

            case 13:
              redes = _context3.sent;
              newData = _extends({}, JSON.parse(JSON.stringify(diputado)), {
                title: diputado.nombre + " " + diputado.apellido,
                subTitle: "ajustar esto",
                cargos: cargos,
                comisiones: comisiones,
                redes: redes
              });

              res.status(200).json({ data: newData });
              _context3.next = 22;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](0);

              _utils.logger.error(_context3.t0.message);
              res.status(500).json({ error: _context3.t0.message });

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 18]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();
};