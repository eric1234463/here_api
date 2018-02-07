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
    value: req.body.step,
    distance: req.body.distance
  };
  _models2.default.patientWalkingStep.findOne({
    where: {
      patientId: req.body.patientId,
      date: req.body.date
    }
  }).then(function (obj) {
    if (obj) {
      // update
      obj.update(value);
      res.json({
        status: "update"
      });
    } else {
      // insert
      _models2.default.patientWalkingStep.create(value);
      res.json({
        status: "create"
      });
    }
  });
}
//# sourceMappingURL=createWalkingStep.js.map