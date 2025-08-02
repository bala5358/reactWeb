const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema(
  {
    serialNumber: { type: Number, required: true },
    voterId: { type: String, required: true },
    name: String,
    relatedPerson: String,
    relation: String,
    houseNumber: String,
    age: Number,
    gender: String,
    photoStatus: String,
  },
  { timestamps: true }
);

// 🔐 Enforce unique combination of serialNumber and voterId
voterSchema.index({ serialNumber: 1, voterId: 1 }, { unique: true });

module.exports = mongoose.model("Voter", voterSchema);
