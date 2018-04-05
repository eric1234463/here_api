import models from "../../../models";
import { status } from "../../constants/bookingEnum";

export default async function updateBooking(req, res, next) {
  const booking = await models.Booking.update(
    {
      status: req.body.accept ? status.Active : status.Decline
    },
    {
      where: {
        id: req.body.id
      }
    }
  );
  res.json(booking[1]);
}
