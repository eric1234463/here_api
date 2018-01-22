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
            const sleepData = jsonData.reduce((arr, collectionElement) => {
                if (collectionElement.type == 'SLEEP') {
                    const time = moment(collectionElement.createdAt);
                    const remainder = 30 - time.minute() % 30;
                    const roundUpTime = moment(time).add("minutes", remainder).hours();
                    arr.push(roundUpTime);
                }
                return arr;
            }, [])
            const wakeData = jsonData.reduce((arr, collectionElement) => {
                if (collectionElement.type == 'WAKE') {
                    const time = moment(collectionElement.createdAt);
                    const remainder = 30 - time.minute() % 30;
                    const roundUpTime = moment(time).add("minutes", remainder).hours();;
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
