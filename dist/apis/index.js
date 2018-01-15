'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./user/router');

var _router2 = _interopRequireDefault(_router);

var _router3 = require('./record/router');

var _router4 = _interopRequireDefault(_router3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use('/user', _router2.default);
router.use('/record', _router4.default);

module.exports = router;
//# sourceMappingURL=index.js.map