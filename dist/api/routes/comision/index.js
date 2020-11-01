"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComisionById = exports.getComisionesLimit = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require("../../../utils");

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

var _dayjs = require("dayjs");

var _dayjs2 = _interopRequireDefault(_dayjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Sequelize = require("sequelize");
var Op = Sequelize.Op;

var Model = _models2.default.comisiones;
var ModelTipo = _models2.default.tipo;
var ModelDiputado = _models2.default.diputado;
var ModelPersonaComision = _models2.default.personaComision;

// no tendra limit devolvera toda la data de los ultimos 365dias
var getComisionesLimit = exports.getComisionesLimit = function getComisionesLimit() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var tipoComision, start, comisiones, keyBy, keyedComisiones, algo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.info("1111");
              _context.next = 4;
              return ModelTipo.findAll({
                attributes: ["id", "descripcion"],
                where: {
                  idPadre: 1,
                  disponible: true
                },
                order: [["id", "ASC"]]
              });

            case 4:
              tipoComision = _context.sent;
              start = (0, _dayjs2.default)().add(-365, "day").toDate();
              _context.next = 8;
              return Model.findAll({
                attributes: ["id", "tipo", "titulo", "descripcion"],
                where: {
                  disponible: true,
                  createdAt: _defineProperty({}, Op.gte, start)
                },
                order: [["tipo", "ASC"]]
              });

            case 8:
              comisiones = _context.sent;

              keyBy = function keyBy(arr, key) {
                return arr.reduce(function (acc, element) {
                  if (!acc[element[key]]) {
                    acc[element[key]] = [];
                  }
                  acc[element[key]].push(element);
                  return acc;
                }, {});
              };

              keyedComisiones = keyBy(comisiones, "tipo");
              algo = tipoComision.map(function (y) {
                return _extends({}, JSON.parse(JSON.stringify(y)), {
                  comisiones: keyedComisiones[y.id]
                });
              });

              res.status(200).json({ data: algo });
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);

              _utils.logger.error(_context.t0.message);
              res.status(500).json({ error: _context.t0.message });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 15]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getComisionById = exports.getComisionById = function getComisionById() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var idComision, data, personasComision, diputados;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              idComision = req.params.id;
              _context2.next = 4;
              return Model.findOne({
                attributes: {
                  exclude: (0, _utils.excludeDef)()
                },
                where: {
                  id: idComision
                }
              });

            case 4:
              data = _context2.sent;
              _context2.next = 7;
              return ModelPersonaComision.findAll({
                include: [{
                  model: ModelDiputado,
                  attributes: ["id", "nombre", "apellido", "img", "descripcion"]
                }],
                where: {
                  idComision: idComision
                },
                attributes: ["id"]
              });

            case 7:
              personasComision = _context2.sent;
              diputados = personasComision.reduce(function (acc, value) {
                var newValue = JSON.parse(JSON.stringify(value));
                acc.push({
                  id: newValue.diputado.id,
                  img: newValue.diputado.img,
                  title: newValue.diputado.nombre + " " + newValue.diputado.apellido,
                  subTitle: "ajustar esto"
                });
                return acc;
              }, []);


              res.status(200).json({ data: data, diputados: diputados });
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);

              _utils.logger.error(_context2.t0.message);
              res.status(500).json({ error: _context2.t0.message });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 12]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};