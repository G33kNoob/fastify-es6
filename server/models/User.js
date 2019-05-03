"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Schema = _mongoose["default"].Schema;

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.UserSchema = new Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: Number
      },
      position: {
        type: Number
      },
      create_at: {
        type: Date
      },
      update_at: {
        type: Date
      }
    }, {
      versionKey: false
    });
    this.user = _mongoose["default"].model('users', this.UserSchema);
  }

  _createClass(User, [{
    key: "getAllUsers",
    value: function getAllUsers() {
      return this.user.find();
    }
  }, {
    key: "addUser",
    value: function addUser(data) {
      /*return new Promise(function(resolve, reject) {
          resolve(data)
      });*/
      var user = this.user({
        name: data.name,
        email: data.email,
        password: 'Admin12345',
        role: 3,
        position: 5,
        updated_at: '',
        created_at: new Date()
      });
      return user.save();
    }
  }, {
    key: "removeUser",
    value: function removeUser(_id) {
      return this.user.findById(_id).remove();
    }
  }]);

  return User;
}();

var _default = new User();
/*const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number },
    position: { type: Number },
    create_at: { type: Date },
    update_at: { type: Date },
}, { versionKey: false });

const user = mongoose.model('users', UserSchema);

export function getAllUsers() {
    return user.find();
}*/

/*export function createUser(data) {
    const user = new Users ({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        updated_at: new Date(),
        created_at: new Date()
    });
    return user.save();
}*/

/*export function getUserById(id) {
    return user.findById(id);
}*/

/*
export function deleteUser(id) {
    return Users.findById(id).remove();
}*/


exports["default"] = _default;