import express from "express";
import { getappointment} from "../Controller/C_appointment.js";

const router10=express.Router();

router10.get("/",getappointment);

export default router10;