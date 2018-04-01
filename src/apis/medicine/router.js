import express from 'express';
import getMedicines from './getMedicines';

const medicineRouter = express.Router();
medicineRouter.get('/', getMedicines);

export default medicineRouter;
