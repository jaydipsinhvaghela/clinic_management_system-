import express from "express";

import {
    deleteManage_doctor,
    getManage_doctor,
    getManage_doctors,
    insertManage_doctor,
    updateManage_doctor
} from '../Controller/Manage_doctor.js'

const router = express.Router();

router.get("/", getManage_doctors);
router.get("/:id", getManage_doctor);
router.post("/", insertManage_doctor);
router.delete("/:id", deleteManage_doctor);
router.put("/:id", updateManage_doctor);

export default router;