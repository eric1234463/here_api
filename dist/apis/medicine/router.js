'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getMedicines = require('./getMedicines');

var _getMedicines2 = _interopRequireDefault(_getMedicines);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var medicineRouter = _express2.default.Router();
medicineRouter.get('/', _getMedicines2.default);

exports.default = medicineRouter;
//# sourceMappingURL=router.js.map