"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = void 0;

var _controllers = require("../controllers");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Router =
/*#__PURE__*/
function () {
  function Router() {
    _classCallCheck(this, Router);

    this.apiUrl = '/api/';
    this.homeController = new _controllers.HomeController();
    this.userController = new _controllers.UserController();
  }

  _createClass(Router, [{
    key: "routes",
    value: function routes(app) {
      var _this = this;

      app.get(this.apiUrl, function (req, reply) {
        return _this.homeController.index(req, reply);
      });
      app.get(this.apiUrl + 'users', function (req, reply) {
        return _this.userController.index(req, reply);
      });
      app.post(this.apiUrl + 'user', function (req, reply) {
        return _this.userController.addUser(req, reply);
      });
    }
  }]);

  return Router;
}();

exports.Router = Router;