const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Items", ItemsSchema);
