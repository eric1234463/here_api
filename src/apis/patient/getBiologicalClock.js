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
        let dateArray = [];
        let sleepArray = [];
        let wakeArray = [];
        let start = new Date(req.query.from);
        let end = new Date(req.query.to);

        while (start <= end) {
            dateArray.push(start.getTime());
            sleepArray.push(0);
            wakeArray.push(0);
            let newDate = start.setDate(start.getDate() + 1);
            start = new Date(newDate);
        }

        models.patientBiologicalClock
            .findAll({
                where: {
                    patientId: req.query.patientId,
                    date: {
                        $between: [req.query.from, req.query.to]
                    }
                },
            }).then((dates) => {
                const jsonData = _.map(dates, 'dataValues');
                const dataArr = jsonData.forEach(collectionElement => {
                    let date = new Date(collectionElement.date).getTime();
                    let index = dateArray.findIndex(x => x == date);
                    const time = moment(collectionElement.dateTime).tz("Asia/Hong_Kong");
                    const remainder = 30 - time.minute() % 30;
                    const roundUpTime = moment(time).add(remainder, "minutes").hours();
                    if (collectionElement.type == 'SLEEP') {
                        sleepArray[index] = roundUpTime;
                    } else {
                        wakeArray[index] = roundUpTime;
                    }   
                });
                let hourArray = [];
                for (let i = 0; i < sleepArray.length; i++) {
                    let sleepHour = Math.abs(sleepArray[i] - wakeArray[i]);
                    hourArray.push(sleepArray);
                }
                const result = [{
                    label: 'SLEEP HOUR',
                    data: hourArray
                }];
                res.json(result);
            });
    }
}
