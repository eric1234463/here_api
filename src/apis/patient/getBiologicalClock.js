import models from '../../../models';
import _ from 'lodash';
import moment from 'moment';
export default function getBiologicalClock(req, res, next) {
    models.patientBiologicalClock
        .findAll({
            where: {
                patientId: req.query.patientId,
                createdAt: {
                    $between: [req.query.from, req.query.to]
                }
            },
        }).then((dates) => {
            const jsonData = _.map(dates, 'dataValues');
            const sleepData = _.map(jsonData, (obj) => {
                if (obj.type == 'SLEEP') {
                    const time = moment(obj.createdAt).format('h:mm');
                    return time;
                }
            });
            const wakeData = _.map(jsonData, (obj) => {
                if (obj.type === 'WAKE') {
                    const time = moment(obj.createdAt).format('h:mm');
                    return time;
                }
            });
            console.log(wakeData);
            const result = [{
                label: 'SLEEP',
                data: sleepData
            }, {
                label: 'WAKE',
                data: wakeData
            }];
            res.json(result);
        });
}
