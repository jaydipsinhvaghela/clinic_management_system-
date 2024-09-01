import express from "express";

import {
    deleteAdmin_users,
    getAdmin_users,
    getAdmin_userss,
    insertAdmin_users,
    updateAdmin_users
} from '../Controller/Admin_users.js'

const router = express.Router();

router.get("/", getAdmin_userss);
router.get("/:id", getAdmin_users);
router.post("/", insertAdmin_users);
router.delete("/:id", deleteAdmin_users);
router.put("/:id", updateAdmin_users);

export default router;