import express from "express";
import doctorLogin from "./doctorLogin";
import doctorLocation from "./doctorLocation";

const doctorRouter = express.Router();
doctorRouter.post("/login", doctorLogin);
doctorRouter.get("/location", doctorLocation);

module.exports = doctorRouter;
