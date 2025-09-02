const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  thumbnailURL: {
    type: String,
    required: true
  },
  videoURL: {
    type: String,
    required: true
  },
  metadata: {
    actors: [String],
    director: String,
    rating: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);