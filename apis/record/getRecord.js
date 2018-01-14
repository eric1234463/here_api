import models from '../../models';


export default function getRecord(req, res, next) {
    models.Record
        .findOne({
            where:{
                id: req.params.id
            },
            include: [
                { model: models.Doctor},
                { model: models.Patient}
            ]
        }).then(records=>{
            res.json(records);
        })
}
