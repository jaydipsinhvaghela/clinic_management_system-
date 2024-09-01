import express from "express";
import { getdoctor} from "../Controller/C_doctor.js";

const router11=express.Router();

router11.get("/",getdoctor);

export default router11;