import models from '../../../models';


export default function getFeed(req, res, next) {
    models.Feed
        .findOne({
            where: {
                id: req.params.id
            },
            include: [
                { model: models.Doctor },
            ]
        }).then(feed => {
            res.json(feed);
        })
}
