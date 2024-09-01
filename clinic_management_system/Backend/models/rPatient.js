import express from "express";

import {
    deletePatient,
    getPatient,
    getPatients,
    insertPatient,
    updatePatient
} from '../Controller/Patient.js'

const router = express.Router();

router.get("/", getPatients);
router.get("/:id", getPatient);
router.post("/", insertPatient);
router.delete("/:id", deletePatient);
router.put("/:id", updatePatient);

export default router;