import models from "../../../models";
import axios from 'axios';

export default async function updateDoctor(req, res, next) {

  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.location}&key=AIzaSyDWRykKh_AkmGvt8RzH_zkpdUhrWh4SJLc`;
  const geocoding = await axios.get(url);
  let google_lat = 0;
  let google_lng = 0;
  if (geocoding.results.length > 0) {
    google_lat = geocoding.results[0].geometry.location.lat;
    google_lng = geocoding.results[0].geometry.location.lng;
  }
  models.Doctor.update(
    {
      displayName: req.body.displayName,
      age: req.body.age,
      gender: req.body.gender,
      location: req.body.location,
      about: req.body.about,
      telphone: req.body.telphone,
      google_lat: google_lat,
      google_lng: google_lng
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(user => {
    res.json(user);
  });
}
