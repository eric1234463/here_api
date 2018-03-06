import models from '../../../models';


export default function patientLogin(req, res, next) {
    if(!!req.body.gender && !!req.body.age) {
        models.Patient
        .findOrCreate({
            where: {
                uid: req.body.uid,
                email: req.body.email
            },
            defaults: {
                uid: req.body.uid,
                email: req.body.email,
                displayName: req.body.displayName,
                photoURL: req.body.photoURL,
                gender: req.body.gender,
                age: req.body.age
            }
        }).spread((user, created) => {
            res.json(user);
        });
    } else {
        models.Patient
        .findOrCreate({
            where: {
                uid: req.body.uid,
                email: req.body.email
            },
            defaults: {
                uid: req.body.uid,
                email: req.body.email,
                displayName: req.body.displayName,
                photoURL: req.body.photoURL,
            }
        }).spread((user, created) => {
            res.json(user);
        });
    }
    
}
