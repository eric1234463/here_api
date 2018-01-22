import models from '../../../models';


export default function doctorLogin(req, res, next) {
    models.Doctor
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
