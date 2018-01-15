import models from '../../../models';


export default function createFeed(req, res, next) {
    models.Feed.create({
        content:req.body.content,
        title:req.body.title,
        photoURL:req.body.photoURL,
        doctorId:req.body.doctorId,
    }).then((feed) => {
        res.json(feed);
    })
}
