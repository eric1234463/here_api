import express from 'express';
import patientRouter from './patient/router';
import doctorRouter from './doctor/router';
import recordRouter from './record/router';
import feedRouter from './feed/router';
import diseaseRouter from './disease/router';
import insuranceRouter from './insurance/router';
import notificationRouter from './notification/router';
import factorRouter from './factor/router';
import medicineRouter from './medicine/router';
import bookingRouter from './booking/router';
import districtRouter from './district/router';

const router = express.Router();
router.use('/patient', patientRouter);
router.use('/doctor', doctorRouter);
router.use('/record', recordRouter);
router.use('/feed', feedRouter);
router.use('/disease', diseaseRouter);
router.use('/insurance', insuranceRouter);
router.use('/notification', notificationRouter);
router.use('/factor', factorRouter);
router.use('/medicine', medicineRouter);
router.use('/booking', bookingRouter);
router.use('/district', districtRouter);


module.exports = router;
