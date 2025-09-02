const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  product_url: {
    type: String,
    required: true,
  },
  movie_id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the Movie model
    required: true,
    ref: 'Movie',
  },
  starting_time: {
    type: Number, // Start time in seconds relative to the video duration
    required: true,
  },
  end_time: {
    type: Number, // End time in seconds relative to the video duration
    required: true,
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt`
});

module.exports = mongoose.model('Product', productSchema);
