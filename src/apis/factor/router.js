import express from 'express';
import getFactors from './getFactors';

const factorRouter = express.Router();
factorRouter.get('/', getFactors);

export default factorRouter;
