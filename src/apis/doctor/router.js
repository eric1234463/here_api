import express from "express";
import doctorLogin from "./doctorLogin";
import doctorLocation from "./doctorLocation";
import getDoctor from "./getDoctor";

const doctorRouter = express.Router();
doctorRouter.post("/login", doctorLogin);
doctorRouter.get("/location", doctorLocation);
doctorRouter.get("/:id", getDoctor);

module.exports = doctorRouter;
