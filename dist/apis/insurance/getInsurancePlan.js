"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInsurancePlan;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInsurancePlan(req, res, next) {
  _models2.default.InsurancePlan.findOne({
    where: {
      id: req.params.id,
      include: [{
        model: _models2.default.InsurancePlanAdvantage,
        include: [_models2.default.InsuranceAdvantage]
      }, {
        model: _models2.default.InsurancePlanDisadvantage,
        include: [_models2.default.InsuranceDisadvantage]
      }]
    }
  }).then(function (insurancePlans) {
    res.json(insurancePlans);
  });
}
//# sourceMappingURL=getInsurancePlan.js.map