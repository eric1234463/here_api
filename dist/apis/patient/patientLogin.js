'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = patientLogin;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patientLogin(req, res, next) {
    _models2.default.Patient.findOrCreate({
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
//# sourceMappingURL=patientLogin.js.map