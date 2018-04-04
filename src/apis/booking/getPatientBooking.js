import models from "../../../models";
import { status } from '../../constants/bookingEnum';

export default async function getPatientBooking(req, res, next) {
  const booking = await models.Booking.findAll({
    where: {
      patientId: req.query.id,
      status: status.Active,
      date: {
        $gte: req.query.date
      }
    },
    include: [
      { 
        model: models.Doctor,
        include: [{ model: models.District }, { model: models.Specialty }]
      }
    ]
  });
  res.json(booking);
}
