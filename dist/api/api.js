"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _utils = require("../utils");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _models = require("../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var apiRoutes = _express2.default.Router();

var ModelUsuario = _models2.default.usuario;

apiRoutes.get("/", function (req, res) {
  res.status(200).json({
    data: {
      title: "API ROOT",
      message: "this is the root of the API you need to login to access the API!"
    }
  });
});

apiRoutes.use("/", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = req.headers.authorization;

            if (!token) {
              _context2.next = 5;
              break;
            }

            _jsonwebtoken2.default.verify(token, _config2.default.secretApi, function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, decoded) {
                var user;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!err) {
                          _context.next = 2;
                          break;
                        }

                        return _context.abrupt("return", res.status(403).json({ error: "Authentication failed." }));

                      case 2:
                        user = void 0;

                        if (!decoded.user.admin) {
                          _context.next = 6;
                          break;
                        }

                        _context.next = 10;
                        break;

                      case 6:
                        console.info("decoded.user.email", decoded.user.id);
                        _context.next = 9;
                        return ModelUsuario.findOne({
                          attributes: ["id"],
                          where: {
                            id: decoded.user.id
                          }
                        });

                      case 9:
                        user = _context.sent;

                      case 10:
                        if (user) {
                          _context.next = 12;
                          break;
                        }

                        return _context.abrupt("return", res.status(500).json({ error: "Could not validate this user.." }));

                      case 12:

                        req.user = user;
                        next();

                      case 14:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context2.next = 7;
            break;

          case 5:
            _utils.logger.error("No token provided.");

            return _context2.abrupt("return", res.status(403).json({
              error: "No token provided."
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

apiRoutes.use(function (req, res, next) {
  if (!req.route) {
    return res.status(404).json({
      error: "Oooops! 404"
    });
  }

  next();
});

exports.default = apiRoutes;