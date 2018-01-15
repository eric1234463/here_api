import models from '../../../models';


export default function patientLogin(req, res, next) {
    models.Patient
        .findOrCreate({
            where: {
                uid: req.body.uid
            }
        }).spread((user, created) => {
            if (created == true) {
                user.update({
                    displayName: req.body.displayName,
                    photoURL: req.body.photoURL,
                });
            } 
            res.json(user);
        });
}
