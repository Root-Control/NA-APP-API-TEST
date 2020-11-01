"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComisionById = exports.getAllTypeOf = undefined;

var _utils = require("../../../utils");

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

var Model = _models2.default.tipo;

var getAllTypeOf = exports.getAllTypeOf = function getAllTypeOf() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var idPadre, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              idPadre = req.params.idPadre;
              _context.next = 4;
              return Model.findAll({
                attributes: ["id", "idPadre", "descripcion"],
                where: {
                  idPadre: idPadre
                },
                order: [["descripcion", "ASC"]]
              });

            case 4:
              data = _context.sent;

              res.status(200).json({ data: data });
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

var getComisionById = exports.getComisionById = function getComisionById() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var idComision, data;
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

              res.status(200).json({ data: data });
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);

              _utils.logger.error(_context2.t0.message);
              res.status(500).json({ error: _context2.t0.message });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 8]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};