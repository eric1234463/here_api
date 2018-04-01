import express from 'express';
import createBooking from './createBooking';
import getDoctorBooking from './getDoctorBooking';
import getPatientBooking from './getPatientBooking';

const factorRouter = express.Router();
factorRouter.get('/patient', getPatientBooking);
factorRouter.get('/doctor', getDoctorBooking);
factorRouter.post('/', createBooking);

export default factorRouter;
