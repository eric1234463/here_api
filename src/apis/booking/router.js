import express from 'express';
import createBooking from './createBooking';
import getDoctorBooking from './getDoctorBooking';
import getPatientBooking from './getPatientBooking';
import updateBooking from './updateBooking';

const factorRouter = express.Router();
factorRouter.get('/patient', getPatientBooking);
factorRouter.get('/doctor', getDoctorBooking);
factorRouter.post('/', createBooking);
factorRouter.put('/', updateBooking);

export default factorRouter;