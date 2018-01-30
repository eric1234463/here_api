"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateDoctor;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateDoctor(req, res, next) {
  _models2.default.Doctor.update({
    displayName: req.body.displayName,
    age: req.body.age,
    gender: req.body.gender,
    location: req.body.location,
    about: req.body.about,
    telphone: req.body.telphone
  }, {
    where: {
      id: req.params.id
    }
  }).then(function (user) {
    res.json(user);
  });
}
//# sourceMappingURL=updateDoctor.js.map