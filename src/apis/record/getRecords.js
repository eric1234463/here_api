import models from '../../../models';


export default function getRecords(req, res, next) {
    models.Record
        .findAll({
            where: {
                patientId: req.query.userId
            },
            include: [
                { model: models.Doctor },
                { model: models.Patient },
                { model: models.RecordFactor, include: models.Factor },
                { model: models.RecordMedicine, include: models.Medicine }
            ]
        }).then(records => {
            res.json(records);
        })
}
