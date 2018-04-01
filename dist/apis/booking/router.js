'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _createBooking = require('./createBooking');

var _createBooking2 = _interopRequireDefault(_createBooking);

var _getDoctorBooking = require('./getDoctorBooking');

var _getDoctorBooking2 = _interopRequireDefault(_getDoctorBooking);

var _getPatientBooking = require('./getPatientBooking');

var _getPatientBooking2 = _interopRequireDefault(_getPatientBooking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factorRouter = _express2.default.Router();
factorRouter.get('/patient', _getPatientBooking2.default);
factorRouter.get('/doctor', _getDoctorBooking2.default);
factorRouter.post('/', _createBooking2.default);

exports.default = factorRouter;
//# sourceMappingURL=router.js.map