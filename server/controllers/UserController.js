"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "index",
    value: function index(req, reply) {
      _User["default"].getAllUsers().then(function (data) {
        return reply.send(data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "addUser",
    value: function addUser(req, reply) {
      _User["default"].addUser(req.body).then(function (res) {
        return reply.send(res);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "removeUser",
    value: function removeUser(req, reply) {
      _User["default"].removeUser(req.body.id).then(function (res) {
        return reply.send('Success');
      })["catch"](function (err) {
        return reply.send('Error');
      });
    }
  }]);

  return UserController;
}();

exports.UserController = UserController;