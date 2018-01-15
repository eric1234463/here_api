import express from 'express';
import userRouter from './user/router';
import recordRouter from './record/router';
import feedRouter from './feed/router';

const router = express.Router();
router.use('/user', userRouter);
router.use('/record', recordRouter);
router.use('/feed', feedRouter);

module.exports = router;
