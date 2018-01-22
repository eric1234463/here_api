'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createDisease;

var _models = require('../../../models');

var _models2 = _interopRequireDefault(_models);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDisease(req, res, next) {
    _axios2.default.get('https://disease-info-api.herokuapp.com/diseases').then(function (res) {
        res.data.diseases.forEach(function (disease) {
            // models.Disease.create({
            //     description: disease.facts[0],
            //     name: disease.name,
            //     symptoms: disease.symptoms,
            //     prevention:disease.prevention
            // });
        });
    });
}
//# sourceMappingURL=createDisease.js.map