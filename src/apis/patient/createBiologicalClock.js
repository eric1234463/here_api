import models from '../../../models';


export default function createBiologicalClock(req, res, next) {
    if (req.body.type == 'SLEEP') {
        models.patientBiologicalClock
            .findOrCreate({
                type: req.body.type,
                patientId: req.body.patientId,
                date: req.body.date
            }).spread((clock, created) => {
                res.json({ status: created });
            });
    } else {
        models.patientBiologicalClock
            .findOrCreate({
                type: req.body.type,
                patientId: req.body.patientId,
                date: req.body.date,
                createdAt: req.body.date
            }).spread((clock, created) => {
                res.json({ status: created });
            });
    }
}
