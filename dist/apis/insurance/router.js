"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _getInsurancePlans = require("./getInsurancePlans");

var _getInsurancePlans2 = _interopRequireDefault(_getInsurancePlans);

var _searchInsurancePlans = require("./searchInsurancePlans");

var _searchInsurancePlans2 = _interopRequireDefault(_searchInsurancePlans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insuranceRouter = _express2.default.Router();
insuranceRouter.get("/", _getInsurancePlans2.default);
insuranceRouter.post("/search", _searchInsurancePlans2.default);

exports.default = insuranceRouter;
//# sourceMappingURL=router.js.map