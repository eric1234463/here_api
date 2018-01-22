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
        }
    }).spread(function (user, created) {
        if (created == true) {
            user.update({
                displayName: req.body.displayName,
                photoURL: req.body.photoURL
            });
        }
        res.json(user);
    });
}
//# sourceMappingURL=doctorLogin.js.map