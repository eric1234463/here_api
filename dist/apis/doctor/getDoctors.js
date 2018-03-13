"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDoctors;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDoctors(req, res, next) {
  _models2.default.Doctor.findAll({
    include: [{ model: _models2.default.District }, { model: _models2.default.Specialty }]
  }).then(function (doctors) {
    res.json(doctors);
  });
}
//# sourceMappingURL=getDoctors.js.map