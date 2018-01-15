'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _patientLogin = require('./patientLogin');

var _patientLogin2 = _interopRequireDefault(_patientLogin);

var _doctorLogin = require('./doctorLogin');

var _doctorLogin2 = _interopRequireDefault(_doctorLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = _express2.default.Router();
userRouter.post('/patientLogin', _patientLogin2.default);
userRouter.post('/doctorLogin', _doctorLogin2.default);

module.exports = userRouter;
//# sourceMappingURL=router.js.map