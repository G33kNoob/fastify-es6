"use strict";

var _config = require("./config/config.json");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_App["default"].listen(_config.serverPort, function (err, address) {
  if (err) {
    _App["default"].log.error(err);

    process.exit(1);
  }

  _App["default"].log.info("server listening on ".concat(_config.serverPort));
});