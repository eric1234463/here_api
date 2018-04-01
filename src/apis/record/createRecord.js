import models from '../../../models';

export default async function createRecord(req, res, next) {
    const colorClass = [
        'mat-orange-500-bg',
        'mat-cyan-500-bg',
        'mat-red-500-bg',
        'mat-pink-500-bg',
        'mat-purple-500-bg',
        'mat-deep-purple-500-bg',
        'mat-indigo-500-bg'
    ];
    const recordPayload = {
        description: req.body.record.description,
        doctorId: req.body.record.doctorId,
        patientId:  req.body.record.patientId
    }
    const record = await models.Record.create(recordPayload);
    if (req.body.medicines) {
        for (let index in req.body.medicines) {
            let randomClass = colorClass[Math.round(Math.random() * 6)];
            await models.RecordMedicine.create({
                medicineId: req.body.medicines[index],
                recordId: record.dataValues.id,
                class: randomClass
            })
        };
    };

    if (req.body.factors) {
        for (let index in req.body.factors) {
            let randomClass = colorClass[Math.round(Math.random() * 6)];
            await models.RecordFactor.create({
                factorId: req.body.factors[index],
                recordId: record.dataValues.id,
                class: randomClass
            })
        };
    };

    res.json({
        created: true
    })
}
