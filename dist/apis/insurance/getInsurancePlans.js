"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInsurancePlans;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInsurancePlans(req, res, next) {
  _models2.default.InsurancePlan.findAll().then(function (insurancePlans) {
    res.json(insurancePlans);
  });
}
//# sourceMappingURL=getInsurancePlans.js.map