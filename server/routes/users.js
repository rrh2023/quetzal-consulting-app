import express from "express";
export const router = express.Router();
import { User } from "../models/User";

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post("/", (req, res) => {
  res.send(req.body);
});

export default router;
