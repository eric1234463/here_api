import models from '../../../models';

export default function createBiologicalClock(req, res, next) {
    if (req.body.type == 'SLEEP') {
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
                    createdAt: req.body.date
                }
            }, {
                forceTimestamps: true
            }).spread((clock, created) => {

                forceTimestamps: true
            });
    }
    res.json({ status: created });
});
    }
}
