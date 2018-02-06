"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWalkingStep;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWalkingStep(req, res, next) {
  _models2.default.patientWalkingStep.findAll({
    where: {
      patientId: req.query.patientId
    }
  }).then(function (obj) {
    res.json(obj);
  });
}
//# sourceMappingURL=getWalkingStep.js.map