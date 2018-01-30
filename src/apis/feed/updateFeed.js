import models from "../../../models";

export default function updateFeed(req, res, next) {
  models.Feed.update(
    {
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(feed => {
    res.json(feed);
  });
}
