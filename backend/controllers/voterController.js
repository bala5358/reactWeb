// controllers/voterController.js
const Voter = require("../models/Voter");

exports.uploadVoters = async (req, res) => {
  try {
    const { voters, allowPartial } = req.body;

    if (!Array.isArray(voters)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    const incomingSerials = voters.map((v) => v.serialNumber);
    const existingVoters = await Voter.find(
      { serialNumber: { $in: incomingSerials } },
      { serialNumber: 1 }
    );

    const existingSerialSet = new Set(
      existingVoters.map((v) => v.serialNumber)
    );

    const duplicates = voters.filter((v) =>
      existingSerialSet.has(v.serialNumber)
    );

    const newEntries = voters.filter(
      (v) => !existingSerialSet.has(v.serialNumber)
    );

    // If duplicates found and not allowed to partially upload
    if (duplicates.length > 0 && !allowPartial) {
      return res.status(409).json({
        message: "Some serial numbers already exist in the database.",
        duplicateSerials: duplicates.map((v) => v.serialNumber),
        canContinue: true,
        newEntryCount: newEntries.length,
      });
    }

    // If allowPartial is true or no duplicates, proceed
    const bulkOps = newEntries.map((voter) => ({
      updateOne: {
        filter: { voterId: voter.voterId },
        update: { $set: voter },
        upsert: true,
      },
    }));

    const result = await Voter.bulkWrite(bulkOps);

    res.status(200).json({
      message: "Voters uploaded successfully",
      uploadedCount: newEntries.length,
      duplicateSerials: duplicates.map((v) => v.serialNumber),
    });
  } catch (error) {
    console.error("❌ Upload Error:", error.message);
    res
      .status(500)
      .json({ message: "Failed to upload voters", error: error.message });
  }
};
// Get all voters
exports.getAllVoters = async (req, res) => {
  try {
    const voters = await Voter.find().sort({ createdAt: -1 });
    res.status(200).json(voters);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch voters", error: err.message });
  }
};

// Get single voter by voterId
exports.getVoterById = async (req, res) => {
  const { voterId } = req.params;
  try {
    const voter = await Voter.findOne({ voterId });
    if (!voter) return res.status(404).json({ message: "Voter not found" });
    res.status(200).json(voter);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving voter", error: err.message });
  }
};

// Update voter by voterId
exports.updateVoter = async (req, res) => {
  const { voterId } = req.params;
  try {
    const updated = await Voter.findOneAndUpdate({ voterId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Voter not found" });
    res
      .status(200)
      .json({ message: "Voter updated successfully", voter: updated });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

// Delete voter by voterId
exports.deleteVoter = async (req, res) => {
  const { voterId } = req.params;
  try {
    const deleted = await Voter.findOneAndDelete({ voterId });
    if (!deleted) return res.status(404).json({ message: "Voter not found" });
    res.status(200).json({ message: "Voter deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
