import express from "express";
import { getCpatient } from "../Controller/C_patient.js";

const router9=express.Router();

router9.get("/",getCpatient);

export default router9;