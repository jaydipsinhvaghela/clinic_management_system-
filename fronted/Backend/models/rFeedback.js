import express from "express";

import {
  deleteFeedback,
  getFeedback,
  getFeedbacks,
  insertFeedback,
  updateFeedback
} from '../Controller/Feedback.js'

const router = express.Router();

router.get("/", getFeedbacks);
router.get("/:id", getFeedback);
router.post("/", insertFeedback);
router.delete("/:id", deleteFeedback);
router.put("/:id", updateFeedback);

export default router;