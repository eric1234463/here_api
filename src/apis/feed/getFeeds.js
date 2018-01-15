import models from '../../../models';


export default function getFeeds(req, res, next) {
    models.Feed
        .findAll({
            include: [
                { model: models.Doctor },
            ]
        }).then(feeds=>{
            res.json(feeds);
        })
}
