import express from "express";
export const router = express.Router();

// @route     GET api/locations
// @desc      Get all users contacts
// @access    Private
router.get("/", (req, res) => {
  res.send("Get all locations");
});

// @route     GET api/locations
// @desc      Add new location
// @access    Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route     PUT api/locations/:id
// @desc      Update contact
// @access    Private
router.put("/:id", (req, res) => {
  res.send("Get all locations");
});

// @route     DELETE api/locations/:id
// @desc      Delete contact
// @access    Private
router.delete("/:id", (req, res) => {
  res.send("Delete location");
});

export default router;
