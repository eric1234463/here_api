import express from 'express';
import patientLogin from './patientLogin';
import createBiologicalClock from './createBiologicalClock';
const patientRouter = express.Router();
patientRouter.post('/login', patientLogin);
patientRouter.post('/biologicalClock', createBiologicalClock);

module.exports = patientRouter;
