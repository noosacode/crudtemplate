const express = require("express");
const router = express.Router();
// mthod 1
const mongoose = require("mongoose");

// method 2
// const Items = require("../models/Items"); // <-- REQUIRED

router.get("/test", async (req, res) => {
  try {
    const docs = await Items.find({});
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/where", (req, res) => {
  res.json({
    db: mongoose.connection.name,
    collections: Object.keys(mongoose.connection.collections),
  });
});

module.exports = router;
