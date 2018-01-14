import express from 'express';
import patientLogin from './patientLogin';
import doctorLogin from './doctorLogin';

const userRouter = express.Router();
userRouter.post('/patientLogin', patientLogin);
userRouter.post('/doctorLogin', doctorLogin);

module.exports = userRouter;
