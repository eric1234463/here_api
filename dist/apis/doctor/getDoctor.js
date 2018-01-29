"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDoctor;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDoctor(req, res, next) {
  _models2.default.Doctor.find({
    where: {
      id: req.params.id
    }
  }).then(function (user) {
    res.json(user);
  });
}
//# sourceMappingURL=getDoctor.js.map