import express from 'express';
import patientLogin from './patientLogin';

const patientRouter = express.Router();
patientRouter.post('/login', patientLogin);

module.exports = patientRouter;
