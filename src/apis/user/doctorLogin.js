import models from '../../../models';


export default function doctorLogin(req, res, next) {
    models.Doctor
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
