import express from 'express';
import patientLogin from './patientLogin';

const patientRouter = express.Router();
patientRouter.post('/login', doctorLogin);

module.exports = patientRouter;
