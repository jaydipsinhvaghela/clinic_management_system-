import express from "express";
import { getCpackage } from "../Controller/C_feedback.js";

const router8=express.Router();

router8.get("/",getCpackage);

export default router8;