import express from "express";

import {
    deleteManage_timeslot,
    getManage_timeslot,
    getManage_timeslots,
    insertManage_timeslot,
    updateManage_timeslot
} from '../Controller/Manage_timeslot.js'

const router = express.Router();

router.get("/", getManage_timeslots);
router.get("/:id", getManage_timeslot);
router.post("/", insertManage_timeslot);
router.delete("/:id", deleteManage_timeslot);
router.put("/:id", updateManage_timeslot);

export default router;