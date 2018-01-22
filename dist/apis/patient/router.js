'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _patientLogin = require('./patientLogin');

var _patientLogin2 = _interopRequireDefault(_patientLogin);

var _createBiologicalClock = require('./createBiologicalClock');

var _createBiologicalClock2 = _interopRequireDefault(_createBiologicalClock);

var _getBiologicalClock = require('./getBiologicalClock');

var _getBiologicalClock2 = _interopRequireDefault(_getBiologicalClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patientRouter = _express2.default.Router();

patientRouter.post('/login', _patientLogin2.default);
patientRouter.post('/biologicalClock', _createBiologicalClock2.default);
patientRouter.get('/biologicalClock', _getBiologicalClock2.default);

module.exports = patientRouter;
//# sourceMappingURL=router.js.map