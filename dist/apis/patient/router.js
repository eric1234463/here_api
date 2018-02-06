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

var _createWalkingStep = require("./createWalkingStep");

var _createWalkingStep2 = _interopRequireDefault(_createWalkingStep);

var _getWalkingStep = require("./getWalkingStep");

var _getWalkingStep2 = _interopRequireDefault(_getWalkingStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var patientRouter = _express2.default.Router();

patientRouter.put("/", _updateProfile2.default);
patientRouter.post("/login", _patientLogin2.default);
patientRouter.post("/biologicalClock", _createBiologicalClock2.default);
patientRouter.post("/walkingStep", _createWalkingStep2.default);
patientRouter.get("/walkingStep", _getWalkingStep2.default);
patientRouter.get("/biologicalClock", _getBiologicalClock2.default);

module.exports = patientRouter;
//# sourceMappingURL=router.js.map