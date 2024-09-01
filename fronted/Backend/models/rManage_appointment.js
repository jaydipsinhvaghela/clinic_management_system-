import express from "express";

import {
    deleteManage_appointment,
    getManage_appointment,
    getManage_appointments,
    insertManage_appointment,
    updateManage_appointment
} from '../Controller/Manage_appointment.js'

const router = express.Router();

router.get("/", getManage_appointments);
router.get("/:id", getManage_appointment);
router.post("/", insertManage_appointment);
router.delete("/:id", deleteManage_appointment);
router.put("/:id", updateManage_appointment);

export default router;