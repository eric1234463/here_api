import models from '../../../models';

export default function createBiologicalClock(req, res, next) {
    if (req.body.type == 'WAKE') {
        models.patientBiologicalClock
            .findOrCreate({
                where: {
                    type: req.body.type,
                    patientId: req.body.patientId,
                    date: req.body.date
                }
            }).spread((clock, created) => {
                res.json({ status: created });
            });
    } else {
        models.patientBiologicalClock
            .findOrCreate({
                where: {
                    type: req.body.type,
                    patientId: req.body.patientId,
                    date: req.body.date,
                },
                defaults: {
                    createdAt: req.body.date
                }
            }, {
                forceTimestamps: true
            }).spread((clock, created) => {
                res.json({ status: created });
            });
    }
}
