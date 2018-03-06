import express from "express";
import getInsurancePlans from "./getInsurancePlans";

const insuranceRouter = express.Router();
insuranceRouter.get("/", getInsurancePlans);

export default insuranceRouter;
