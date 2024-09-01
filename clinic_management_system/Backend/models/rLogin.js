import express from "express";

import {
    getlogin,
   
    
} from '../Controller/Login.js'

const router = express.Router();
router.get("/",getlogin);
export default router;