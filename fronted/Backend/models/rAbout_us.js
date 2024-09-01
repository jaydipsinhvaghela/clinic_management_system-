import express from "express";

import {
    deleteAbout_us,
    getAbout_us,
    getAbout_uss,
    insertAbout_us,
    updateAbout_us
} from '../Controller/About_us.js'

const router = express.Router();

router.get("/", getAbout_uss);
router.get("/:id", getAbout_us);
router.post("/", insertAbout_us);
router.delete("/:id",deleteAbout_us );
router.put("/:id", updateAbout_us);

export default router;