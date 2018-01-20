import express from 'express';
import createDisease from './createDisease';

const diseaseRouter = express.Router();
diseaseRouter.post('/', createDisease);

export default diseaseRouter;
