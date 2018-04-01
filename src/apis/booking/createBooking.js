import models from "../../../models";
import { status } from '../../constants/bookingEnum';

export default async function createBooking(req, res, next) {
  const booking = await models.Booking.create({
    doctorId: req.body.doctorId,
    patientId: req.body.patientId,
    date: req.body.date,
    time: req.body.time,
    status: status.Request
  });
  res.json(booking);
}
