const mongoose = require("mongoose");

const frangipaniTreeSchema = new mongoose.Schema(
  {
    tag: {
      type: String,
      required: true,
    },

    position: {
      type: Number,
      required: true,
      default: 0,
    },

    colour: {
      type: String,
      required: true,
      default: "Unknown",
    },

    wcStatus: {
      type: String,
      required: true,
      default: "Never Added",
    },

    wcLastChanged: Date,

    sellScore: {
      type: Number,
      required: true,
      default: 0,
    },

    bagSize: {
      type: String,
      required: true,
      default: "Unknown",
    },

    price: Number,

    photoQuality: Number,

    bestPhotoDate: Date,

    recentPhotoDate: Date,

    transportSize: {
      type: String,
      required: true,
      default: "Uncategorized",
    },

    relativeSize: {
      type: String,
      required: true,
      default: "Unranked",
    },

    soilPercent: Number,

    dateAdded: {
      type: Date,
      required: true,
    },

    notes: String,
  },
  {
    collection: "frangipanitrees",
  },
);

module.exports = mongoose.model("FrangipaniTree", frangipaniTreeSchema);