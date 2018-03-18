'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getRecords = require('./getRecords');

var _getRecords2 = _interopRequireDefault(_getRecords);

var _getRecord = require('./getRecord');

var _getRecord2 = _interopRequireDefault(_getRecord);

var _createRecord = require('./createRecord');

var _createRecord2 = _interopRequireDefault(_createRecord);

var _getScanRecord = require('./getScanRecord');

var _getScanRecord2 = _interopRequireDefault(_getScanRecord);

var _createScanRecord = require('./createScanRecord');

var _createScanRecord2 = _interopRequireDefault(_createScanRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var recordRouter = _express2.default.Router();
recordRouter.get('/', _getRecords2.default);
recordRouter.get('/:id', _getRecord2.default);
recordRouter.get('/scan', _getScanRecord2.default);
recordRouter.post('/', _createRecord2.default);
recordRouter.post('/scan', _createScanRecord2.default);

exports.default = recordRouter;
//# sourceMappingURL=router.js.map