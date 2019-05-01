"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fastify = _interopRequireDefault(require("fastify"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _serveStatic = _interopRequireDefault(require("serve-static"));

var _Routes = require("./routes/Routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.app = (0, _fastify["default"])({
      logger: true
    });
    this.router = new _Routes.Router();
    this.pathToClient = '../client/dist/';
    this.config();
    this.router.routes(this.app);
  }

  _createClass(App, [{
    key: "config",
    value: function config() {
      this.app.use(_bodyParser["default"].json());
      this.app.use((0, _serveStatic["default"])(_path["default"].join(__dirname, this.pathToClient)));
    }
  }]);

  return App;
}();

var _default = new App().app;
exports["default"] = _default;