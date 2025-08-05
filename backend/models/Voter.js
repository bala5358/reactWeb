const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema(
  {
    serialNumber: { type: Number, required: true },
    voterId: { type: String, required: true },
    name: { type: String, default: null },
    relatedPerson: { type: String, default: null },
    relation: { type: String, default: null },
    houseNumber: { type: String, default: null },
    age: { type: Number, default: null },
    gender: { type: String, default: null },
    photoStatus: { type: String, default: null },

    // ✅ Additional Fields
    voterHistory: { type: String, default: null },
    mobileNumber: { type: String, default: null },
    dateOfBirth: { type: Date, default: null },
    whatsappNumber: { type: String, default: null },
    religion: { type: String, default: null },
    location: { type: String, default: null },
    casteCategory: { type: String, default: null },
    subCaste: { type: String, default: null },
    party: { type: String, default: null },
    membershipNumber: { type: String, default: null },
    languages: { type: [String], default: [] },
    governmentSchemes: { type: [String], default: [] },
    feedback: { type: String, default: null },
    aadharNumber: { type: String, default: null },
    panNumber: { type: String, default: null },
    caste: { type: String, default: null },
    remarks: { type: String, default: null },
  },
  { timestamps: true }
);

// 🔐 Enforce unique combination of serialNumber and voterId
voterSchema.index({ serialNumber: 1, voterId: 1 }, { unique: true });

module.exports = mongoose.model("Voter", voterSchema);
