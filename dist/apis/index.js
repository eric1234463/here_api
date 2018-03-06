'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./patient/router');

var _router2 = _interopRequireDefault(_router);

var _router3 = require('./doctor/router');

var _router4 = _interopRequireDefault(_router3);

var _router5 = require('./record/router');

var _router6 = _interopRequireDefault(_router5);

var _router7 = require('./feed/router');

var _router8 = _interopRequireDefault(_router7);

var _router9 = require('./disease/router');

var _router10 = _interopRequireDefault(_router9);

var _router11 = require('./insurance/router');

var _router12 = _interopRequireDefault(_router11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use('/patient', _router2.default);
router.use('/doctor', _router4.default);
router.use('/record', _router6.default);
router.use('/feed', _router8.default);
router.use('/disease', _router10.default);
router.use('/insurance', _router12.default);

module.exports = router;
//# sourceMappingURL=index.js.map