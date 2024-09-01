import express from "express";

import {
  
   getupdate
    
} from '../Controller/Changepass.js'

const router = express.Router();

router.put("/:id", getupdate);
export default router;