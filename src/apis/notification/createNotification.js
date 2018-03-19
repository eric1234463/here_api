import models from "../../../models";
import axios from "axios";

export default function createNotification(req, res, next) {
  axios
    .create({
      baseURL: "https://fcm.googleapis.com",
      timeout: 1000,
      headers: {
        Authorization: "key=AIzaSyAhoKi1iAoKNwwFszwXGSX3lCk3d0FAguA",
        "Content-Type": "application/json"
      }
    })
    .post("/fcm/send", {
      notification: {
        title: req.body.title,
        body: req.body.body,
        sound: "default",
        click_action: "FCM_PLUGIN_ACTIVITY"
      },
      to: "news"
    })
    .then(result => {
      console.log("success send");
      models.Notification.create({
        title: req.body.title,
        body: req.body.body
      }).then(notification => {
        res.json(notification);
      });
    })
    .catch(error => {
      console.log(error);
    });
}
