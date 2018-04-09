'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getDistrict = require('./getDistrict');

var _getDistrict2 = _interopRequireDefault(_getDistrict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var districtRouter = _express2.default.Router();
districtRouter.get('/', _getDistrict2.default);

exports.default = districtRouter;
//# sourceMappingURL=router.js.map