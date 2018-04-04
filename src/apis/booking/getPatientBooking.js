import models from "../../../models";
import { status } from '../../constants/bookingEnum';

export default async function getPatientBooking(req, res, next) {
  const booking = await models.Booking.findAll({
    where: {
      patientId: req.query.id
    },
    include: [
      { 
        model: models.Doctor,
      }
    ]
  });
  res.json(booking);
}
