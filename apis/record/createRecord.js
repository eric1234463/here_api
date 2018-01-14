import models from '../../models';


export default function createRecord(req, res, next) {
    models.Record.create({
        desctiption:'Hello World',
        doctorId:1,
        patientId:5,
        rate:4
    }).then((record) => {
        res.json(record);
    })
}
