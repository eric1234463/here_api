import express from 'express';
import doctorLogin from './doctorLogin';

const doctorRouter = express.Router();
doctorRouter.post('/login', doctorLogin);

module.exports = doctorRouter;
