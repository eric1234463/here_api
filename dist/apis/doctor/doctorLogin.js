'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doctorLogin;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doctorLogin(req, res, next) {
    _models2.default.Doctor.findOrCreate({
        where: {
            uid: req.body.uid,
            email: req.body.email
        },
        defaults: {
            uid: req.body.uid,
            email: req.body.email,
            displayName: req.body.displayName,
            photoURL: req.body.photoURL
        }
    }).spread(function (user, created) {
        res.json(user);
    });
}
//# sourceMappingURL=doctorLogin.js.map