import express from "express";
import patientLogin from "./patientLogin";
import createBiologicalClock from "./createBiologicalClock";
import getBiologicalClock from "./getBiologicalClock";
import updateProfile from "./updateProfile";
import getPatient from "./getPatient";
import createHealthStatus from "./createHealthStatus";
import createPatientMedicine from "./createPatientMedicine";
import getPatientMedicine from "./getPatientMedicine";
import removePatientMedicine from "./removePatientMedicine";
import getWalkingStep from "./getWalkingStep";

const patientRouter = express.Router();

patientRouter.get("/walkingStep", getWalkingStep);
patientRouter.get("/biologicalClock", getBiologicalClock);
patientRouter.get("/:id/medicine", getPatientMedicine);
patientRouter.get("/:id", getPatient);
patientRouter.post("/login", patientLogin);
patientRouter.post("/medicine", createPatientMedicine);
patientRouter.post("/biologicalClock", createBiologicalClock);
patientRouter.post("/healthStatus", createHealthStatus);
patientRouter.put("/", updateProfile);
patientRouter.delete("/:id/medicine", removePatientMedicine);


module.exports = patientRouter;
