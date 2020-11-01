"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPartidos = undefined;

var _utils = require("../../../utils");

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

var Model = _models2.default.partido;

var getAllPartidos = exports.getAllPartidos = function getAllPartidos() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Model.findAll({
                attributes: ["id", "descripcion"],
                where: {
                  disponible: true
                },
                order: [["descripcion", "ASC"]]
              });

            case 3:
              data = _context.sent;

              res.status(200).json({ data: data });
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              _utils.logger.error(_context.t0.message);
              res.status(500).json({ error: _context.t0.message });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};