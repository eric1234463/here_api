import express from 'express';
import getMedicines from './getMedicines';
import getMedicine from './getMedicine';
import createMedicines from './createMedicine';

const medicineRouter = express.Router();
medicineRouter.get('/:id', getMedicine);
medicineRouter.get('/', getMedicines);
medicineRouter.post('/', createMedicine);

export default medicineRouter;
