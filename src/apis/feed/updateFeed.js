import models from "../../../models";
import { file } from "../../app";
export default function updateFeed(req, res, next) {
  models.Feed.update(
    {
      title: req.body.title,
      content: req.body.content,
      photoURL: req.body.photoURL
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
