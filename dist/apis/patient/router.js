'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _patientLogin = require('./patientLogin');

var _patientLogin2 = _interopRequireDefault(_patientLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patientRouter = _express2.default.Router();
patientRouter.post('/login', doctorLogin);

module.exports = patientRouter;
//# sourceMappingURL=router.js.map