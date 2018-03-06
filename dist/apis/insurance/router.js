"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _getInsurancePlans = require("./getInsurancePlans");

var _getInsurancePlans2 = _interopRequireDefault(_getInsurancePlans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insuranceRouter = _express2.default.Router();
insuranceRouter.get("/", _getInsurancePlans2.default);

exports.default = insuranceRouter;
//# sourceMappingURL=router.js.map