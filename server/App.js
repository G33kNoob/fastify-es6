"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fastify = _interopRequireDefault(require("fastify"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _serveStatic = _interopRequireDefault(require("serve-static"));

var db = _interopRequireWildcard(require("./config/db"));

var _Routes = require("./routes/Routes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
      db.setConnection();
      /*this.app.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
          try {
              var json = JSON.parse(body)
              done(null, json)
          } catch (err) {
              err.statusCode = 400
              done(err, undefined)
          }
      })*/

      /*this.app.use(bodyParser.urlencoded({ extended: true }))
      this.app.use(bodyParser.json());*/

      this.app.use((0, _serveStatic["default"])(_path["default"].join(__dirname, this.pathToClient)));
    }
  }]);

  return App;
}();

var _default = new App().app;
exports["default"] = _default;