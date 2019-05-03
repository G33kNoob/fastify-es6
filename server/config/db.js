"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConnection = setConnection;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function setConnection() {
  _mongoose["default"].Promise = global.Promise;

  _mongoose["default"].connect("mongodb://".concat(_config["default"].db.host, ":").concat(_config["default"].db.port, "/").concat(_config["default"].db.name));
}