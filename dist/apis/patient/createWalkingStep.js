"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createWalkingStep;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWalkingStep(req, res, next) {
  var value = {
    patientId: req.body.patientId,
    date: req.body.date,
    value: req.body.step
  };
  _models2.default.patientWalkingStep.findOne({
    where: {
      patientId: req.body.patientId,
      date: req.body.date
    }
  }).then(function (obj) {
    if (obj) {
      // update
      return obj.update(values);
    } else {
      // insert
      return Model.create(values);
    }
  });
}
//# sourceMappingURL=createWalkingStep.js.map