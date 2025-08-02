const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    state: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    }
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('RhythmUser', userSchema);
