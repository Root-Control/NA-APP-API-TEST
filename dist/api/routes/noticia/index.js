"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNoticiaById = exports.getNoticiaLimit = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require("../../../utils");

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

var _dayjs = require("dayjs");

var _dayjs2 = _interopRequireDefault(_dayjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//const Sequelize = require("sequelize");
//const Op = Sequelize.Op;

var Model = _models2.default.noticia;

// no tendra limit devolvera toda la data de los ultimos 365dias
var getNoticiaLimit = exports.getNoticiaLimit = function getNoticiaLimit() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var cantidad, noticias, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              cantidad = Number.parseInt(req.params.cantidad);
              _context.next = 4;
              return Model.findAll({
                attributes: ["id", "img", "title", "createdAt"],
                where: {
                  disponible: true
                },
                offset: cantidad,
                limit: 10,
                order: [["createdAt", "ASC"]]
              });

            case 4:
              noticias = _context.sent;
              data = noticias.reduce(function (acc, value) {
                var newValue = JSON.parse(JSON.stringify(value));
                acc.push(_extends({}, newValue, {
                  description: (0, _dayjs2.default)(newValue.createdAt).format("DD MMM YYYY h:mm a")
                }));
                return acc;
              }, []);

              res.status(200).json({ data: data });
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

var getNoticiaById = exports.getNoticiaById = function getNoticiaById() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var idNoticia, noticia, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              idNoticia = req.params.id;
              _context2.next = 4;
              return Model.findOne({
                attributes: {
                  exclude: ["updatedAt", "createdUsu", "updatedUsu"]
                },
                where: {
                  id: idNoticia
                }
              });

            case 4:
              noticia = _context2.sent;
              data = _extends({}, JSON.parse(JSON.stringify(noticia)), {
                date: (0, _dayjs2.default)(noticia.createdAt).format("DD MMM YYYY"),
                time: (0, _dayjs2.default)(noticia.createdAt).format("h:mm a")
              });


              res.status(200).json({ data: data });
              _context2.next = 13;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);

              _utils.logger.error(_context2.t0.message);
              res.status(500).json({ error: _context2.t0.message });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 9]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};