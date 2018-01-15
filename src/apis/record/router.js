import express from 'express';
import getRecords from './getRecords';
import getRecord from './getRecord';
import createRecord from './createRecord';

const recordRouter = express.Router();
recordRouter.get('/', getRecords);
recordRouter.get('/:id', getRecord);
recordRouter.post('/', createRecord);

module.exports = recordRouter;
