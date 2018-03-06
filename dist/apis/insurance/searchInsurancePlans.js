"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchInsurancePlans;

var _models = require("../../../models");

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function searchInsurancePlans(req, res, next) {
  var condtion = {
    order: "id ASC"
  };

  if (!req.body.search.provider) {
    condtion.where.provider = {
      $eq: req.body.search.provider
    };
  }

  if (!req.body.search.surgery_cover) {
    condtion.where.surgery_cover = {
      $gte: req.body.surgery_cover
    };
  }

  if (!req.body.search.daliy_cover) {
    condtion.where.daliy_cover = {
      $gte: req.body.search.daliy_cover
    };
  }
  console.log(condtion);
  _models2.default.InsurancePlan.findAll(condtion).then(function (insurancePlans) {
    res.json(insurancePlans);
  });
}
//# sourceMappingURL=searchInsurancePlans.js.map