import models from '../../../models';
import _ from 'lodash';
import moment from 'moment-timezone';
export default function getBiologicalClock(req, res, next) {
    if (req.query.type != undefined) {
        let status = false;
        models.patientBiologicalClock
            .count({
                where: {
                    type: req.query.type,
                    patientId: req.query.patientId,
                    date: req.query.date
                }
            }).then(clock => {
                if (clock != 0) {
                    status = true
                }
                res.json({ status });
            })
    } else {
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
                const sleepData = jsonData.reduce((arr, collectionElement) => {
                    if (collectionElement.type == 'SLEEP') {
                        const time = moment(collectionElement.createdAt);
                        const remainder = 30 - time.minute() % 30;
                        const roundUpTime = moment(time).add("minutes", remainder).hours().tz("Asia/Hong_Kong").format();
                        arr.push(roundUpTime);
                    }
                    return arr;
                }, [])
                const wakeData = jsonData.reduce((arr, collectionElement) => {
                    if (collectionElement.type == 'WAKE') {
                        const time = moment(collectionElement.createdAt);
                        const remainder = 30 - time.minute() % 30;
                        const roundUpTime = moment(time).add("minutes", remainder).hours().tz("Asia/Hong_Kong").format();
                        arr.push(roundUpTime);
                    }
                    return arr;
                }, [])

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
}
