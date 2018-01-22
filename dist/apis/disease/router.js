'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _createDisease = require('./createDisease');

var _createDisease2 = _interopRequireDefault(_createDisease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var diseaseRouter = _express2.default.Router();
diseaseRouter.post('/', _createDisease2.default);

exports.default = diseaseRouter;
//# sourceMappingURL=router.js.map