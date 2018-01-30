import express from "express";
import createFeed from "./createFeed";
import getFeed from "./getFeed";
import getFeeds from "./getFeeds";
import updateFeed from "./updateFeed";

const feedRouter = express.Router();
feedRouter.get("/", getFeeds);
feedRouter.get("/:id", getFeed);
feedRouter.post("/", createFeed);
feedRouter.put("/:id", updateFeed);

export default feedRouter;
