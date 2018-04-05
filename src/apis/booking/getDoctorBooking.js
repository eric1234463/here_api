import models from "../../../models";
import { status } from '../../constants/bookingEnum';

export default async function getDoctorBooking(req, res, next) {
  const booking = await models.Booking.findAll({
    where: {
      doctorId: req.query.id
    },
    include: [
      { 
        model: models.Patient
      }
    ]
  });
  res.json(booking);
}
