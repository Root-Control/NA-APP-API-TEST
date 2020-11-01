"use strict";

require("@babel/polyfill");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _utils = require("./utils");

var _api = require("./api/api");

var _api2 = _interopRequireDefault(_api);

var _auth = require("./api/auth");

var _auth2 = _interopRequireDefault(_auth);

var _public = require("./api/public");

var _public2 = _interopRequireDefault(_public);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function startApp() {
  var app = (0, _express2.default)();

  app.use((0, _cors2.default)());
  app.use(_bodyParser2.default.json({ limit: "50mb" }));
  app.use(_bodyParser2.default.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  }));

  app.use("/auth", _auth2.default);
  app.use("/public", _public2.default);
  app.use("/api/v1", _api2.default);

  app.get("/", function (req, res) {
    res.send("API asamblea");
  });

  app.listen({ port: _config2.default.port }, function () {
    _utils.logger.info("\n\n\uD83D\uDE80 Server ready at http://localhost:" + _config2.default.port + "\n\n");
  });
}

process.on("uncaughtException", function (e) {
  console.log("An error has occured. error is: %s and stack trace is: %s", e, e.stack);
  console.log("Process will restart now.");
  process.exit(1);
});

module.exports = startApp;