"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeController = require("./HomeController");

Object.keys(_HomeController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _HomeController[key];
    }
  });
});

var _UserController = require("./UserController");

Object.keys(_UserController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UserController[key];
    }
  });
});