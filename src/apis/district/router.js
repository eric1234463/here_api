import express from 'express';
import getDistrict from './getDistrict';

const districtRouter = express.Router();
districtRouter.get('/', getDistrict);

export default districtRouter;
