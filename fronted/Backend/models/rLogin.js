import express from "express";

import {
    getlogin,
    getupdate
    
} from '../Controller/Login.js'

const router = express.Router();
router.get("/",getlogin);
router.put("/:id",getupdate);

export default router;