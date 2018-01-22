import express from 'express';
import patientRouter from './patient/router';
import doctorRouter from './doctor/router';

import recordRouter from './record/router';
import feedRouter from './feed/router';
import diseaseRouter from './disease/router';

const router = express.Router();
router.use('/patient', patientRouter);
router.use('/doctor', doctorRouter);
router.use('/record', recordRouter);
router.use('/feed', feedRouter);
router.use('/disease', diseaseRouter);

module.exports = router;
