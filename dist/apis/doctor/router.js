'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _doctorLogin = require('./doctorLogin');

var _doctorLogin2 = _interopRequireDefault(_doctorLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doctorRouter = _express2.default.Router();
doctorRouter.post('/login', _doctorLogin2.default);

module.exports = doctorRouter;
//# sourceMappingURL=router.js.map