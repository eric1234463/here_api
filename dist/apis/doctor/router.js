"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _doctorLogin = require("./doctorLogin");

var _doctorLogin2 = _interopRequireDefault(_doctorLogin);

var _doctorLocation = require("./doctorLocation");

var _doctorLocation2 = _interopRequireDefault(_doctorLocation);

var _getDoctor = require("./getDoctor");

var _getDoctor2 = _interopRequireDefault(_getDoctor);

var _getDoctors = require("./getDoctors");

var _getDoctors2 = _interopRequireDefault(_getDoctors);

var _updateDoctor = require("./updateDoctor");

var _updateDoctor2 = _interopRequireDefault(_updateDoctor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doctorRouter = _express2.default.Router();
doctorRouter.post("/login", _doctorLogin2.default);
doctorRouter.get("/location", _doctorLocation2.default);
doctorRouter.get("/", _getDoctors2.default);
doctorRouter.get("/:id", _getDoctor2.default);
doctorRouter.put("/:id", _updateDoctor2.default);

module.exports = doctorRouter;
//# sourceMappingURL=router.js.map