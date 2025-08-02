const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voterController');

router.post('/upload-voters', voterController.uploadVoters);
// Get all voters
router.get('/', voterController.getAllVoters);

// Get a single voter by voterId
router.get('/:voterId', voterController.getVoterById);

// Update a voter by voterId
router.put('/:voterId', voterController.updateVoter);

// Delete a voter by voterId
router.delete('/:voterId', voterController.deleteVoter);

module.exports = router;
