import express from "express";
export const router = express.Router();
import auth from "../middleware/auth.js";
import { check, validationResult } from "express-validator";

import User from "../models/User.js";
import Location from "../models/Location.js";

// @route     GET api/locations
// @desc      Get all users contacts
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    const locations = await Location.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/locations
// @desc      Add new location
// @access    Private
router.post("/", (req, res) => {
  res.send("Add location");
});

// @route     PUT api/locations/:id
// @desc      Update location
// @access    Private
router.put("/:id", (req, res) => {
  res.send("Get all locations");
});

// @route     DELETE api/locations/:id
// @desc      Delete location
// @access    Private
router.delete("/:id", (req, res) => {
  res.send("Delete location");
});

export default router;
