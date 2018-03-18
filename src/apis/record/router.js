import express from 'express';
import getRecords from './getRecords';
import getRecord from './getRecord';
import createRecord from './createRecord';
import getScanRecord from './getScanRecord';
import createScanRecord from './createScanRecord';

const recordRouter = express.Router();
recordRouter.get('/scan', getScanRecord);
recordRouter.get('/', getRecords);
recordRouter.get('/:id', getRecord);
recordRouter.post('/', createRecord);
recordRouter.post('/scan', createScanRecord);

export default recordRouter;
