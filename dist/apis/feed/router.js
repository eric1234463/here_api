'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _createFeed = require('./createFeed');

var _createFeed2 = _interopRequireDefault(_createFeed);

var _getFeed = require('./getFeed');

var _getFeed2 = _interopRequireDefault(_getFeed);

var _getFeeds = require('./getFeeds');

var _getFeeds2 = _interopRequireDefault(_getFeeds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var feedRouter = _express2.default.Router();
feedRouter.get('/', _getFeeds2.default);
feedRouter.get('/:id', _getFeed2.default);
feedRouter.post('/', _createFeed2.default);

exports.default = feedRouter;
//# sourceMappingURL=router.js.map