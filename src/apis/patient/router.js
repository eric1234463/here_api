import express from "express";
import patientLogin from "./patientLogin";
import createBiologicalClock from "./createBiologicalClock";
import getBiologicalClock from "./getBiologicalClock";
import updateProfile from "./updateProfile";
import createHealthStatus from "./createHealthStatus";
import getWalkingStep from "./getWalkingStep";

const patientRouter = express.Router();

patientRouter.put("/", updateProfile);
patientRouter.post("/login", patientLogin);
patientRouter.post("/biologicalClock", createBiologicalClock);
patientRouter.post("/healthStatus", createHealthStatus);
patientRouter.get("/walkingStep", getWalkingStep);
patientRouter.get("/biologicalClock", getBiologicalClock);

module.exports = patientRouter;
