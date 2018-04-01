'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getFactors = require('./getFactors');

var _getFactors2 = _interopRequireDefault(_getFactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factorRouter = _express2.default.Router();
factorRouter.get('/', _getFactors2.default);

exports.default = factorRouter;
//# sourceMappingURL=router.js.map