import express from "express";
import getNotifications from "./getNotifications";
import createNotification from "./createNotification";

const notificationRouter = express.Router();
notificationRouter.get("/", getNotifications);
notificationRouter.post("/", createNotification);
export default notificationRouter;
