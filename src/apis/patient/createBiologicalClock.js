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
                }
            }).spread((clock, created) => {
                if (created) {
                    clock.update({
                        createdAt: req.body.date
                    });
                }
                res.json({ status: created });
            });
    }
}
