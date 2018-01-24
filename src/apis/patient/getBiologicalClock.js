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
                let current = req.query.from;
                const dataArr = jsonData.reduce((arr, collectionElement) => {
                    const time = moment(collectionElement.createdAt).tz("Asia/Hong_Kong");
                    const remainder = 30 - time.minute() % 30;
                    const roundUpTime = moment(time).add(remainder, "minutes").hours();
                    if (collectionElement.type == 'SLEEP') {
                        arr.sleep.push(roundUpTime);
                    } else {
                        arr.wake.push(roundUpTime);
                    }
                    return arr;
                }, { sleep: [], wake: [] });
                const result = [{
                    label: 'SLEEP',
                    data: dataArr.sleep
                }, {
                    label: 'WAKE',
                    data: dataArr.wake
                }];
                res.json(result);
            });
    }
}
