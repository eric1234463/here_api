import express from 'express';
import createFeed from './createFeed';
import getFeed from './getFeed';
import getFeeds from './getFeeds';

const feedRouter = express.Router();
feedRouter.get('/', getFeeds);
feedRouter.get('/:id', getFeed);
feedRouter.post('/', createFeed);

export default feedRouter;
