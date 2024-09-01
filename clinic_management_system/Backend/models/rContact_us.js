import express from "express";

import {
    deleteContact_us,
    getContact_us,
    getContact_uss,
    insertContact_us,
    updateContact_us
} from '../Controller/Contact_us.js'

const router = express.Router();

router.get("/", getContact_uss);
router.get("/:id", getContact_us);
router.post("/", insertContact_us);
router.delete("/:id",deleteContact_us );
router.put("/:id", updateContact_us);

export default router;