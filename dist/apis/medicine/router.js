'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getMedicines = require('./getMedicines');

var _getMedicines2 = _interopRequireDefault(_getMedicines);

var _getMedicine = require('./getMedicine');

var _getMedicine2 = _interopRequireDefault(_getMedicine);

var _createMedicine = require('./createMedicine');

var _createMedicine2 = _interopRequireDefault(_createMedicine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var medicineRouter = _express2.default.Router();
medicineRouter.get('/:id', _getMedicine2.default);
medicineRouter.get('/', _getMedicines2.default);
medicineRouter.post('/', createMedicine);

exports.default = medicineRouter;
//# sourceMappingURL=router.js.map