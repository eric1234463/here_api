import models from "../../../models";

export default function getNotifications(req, res, next) {
  models.Notification.findAll().then(notifications => {
    res.json(notifications);
  });
}
