import models from "../../../models";

export default function getFeeds(req, res, next) {
  if (req.query.doctorId != undefined) {
    models.Feed.findAll({
      where: {
        doctorId: req.query.doctorId
      },
      include: [{ model: models.Doctor }]
    }).then(feeds => {
      res.json(feeds);
    });
  } else {
    models.Feed.findAll({
      include: [{ model: models.Doctor }]
    }).then(feeds => {
      res.json(feeds);
    });
  }
}
