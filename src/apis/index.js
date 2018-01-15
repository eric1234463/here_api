import express from 'express';
import userRouter from './user/router';
import recordRouter from './record/router';

const router = express.Router();
router.use('/user', userRouter);
router.use('/record', recordRouter);

module.exports = router;
