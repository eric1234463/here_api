"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _patientLogin = require("./patientLogin");

var _patientLogin2 = _interopRequireDefault(_patientLogin);

var _createBiologicalClock = require("./createBiologicalClock");

var _createBiologicalClock2 = _interopRequireDefault(_createBiologicalClock);

var _getBiologicalClock = require("./getBiologicalClock");

var _getBiologicalClock2 = _interopRequireDefault(_getBiologicalClock);

var _updateProfile = require("./updateProfile");

var _updateProfile2 = _interopRequireDefault(_updateProfile);

var _getPatient = require("./getPatient");

var _getPatient2 = _interopRequireDefault(_getPatient);

var _createHealthStatus = require("./createHealthStatus");

var _createHealthStatus2 = _interopRequireDefault(_createHealthStatus);

var _getWalkingStep = require("./getWalkingStep");

var _getWalkingStep2 = _interopRequireDefault(_getWalkingStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patientRouter = _express2.default.Router();

patientRouter.get("/:id", _getPatient2.default);
patientRouter.get("/walkingStep", _getWalkingStep2.default);
patientRouter.get("/biologicalClock", _getBiologicalClock2.default);
patientRouter.post("/login", _patientLogin2.default);
patientRouter.post("/biologicalClock", _createBiologicalClock2.default);
patientRouter.post("/healthStatus", _createHealthStatus2.default);
patientRouter.put("/", _updateProfile2.default);

module.exports = patientRouter;
//# sourceMappingURL=router.js.map