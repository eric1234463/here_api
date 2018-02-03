"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createWalkingStep;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWalkingStep(req, res, next) {
  _models2.default.patientWalkingStep.findOrCreate({
    defaults: {
      value: req.body.step
    },
    where: {
      patientId: req.body.patientId,
      date: req.body.date
    }
  }).spread(function (clock, created) {
    res.json({ status: created });
  });
}
//# sourceMappingURL=createWalkingStep.js.map