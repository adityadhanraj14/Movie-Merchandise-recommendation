const Movie = require('../models/Movie');
const Product = require('../models/Product'); // Adjust path as needed

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort('-createdAt');
    res.render('home', { movies });
  } catch (error) {
    res.status(500).render('error', { error });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    // Fetch the movie by ID
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).render('error', { error: 'Movie not found' });
    }
    console.log(movie._id.toString());
    // Fetch products associated with the movie   { movie_id: movie._id}
    const products = await Product.find();
    console.log(products);
    // Render the movie page with the movie and product data
    res.render('movie', { movie, products });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { error: 'An error occurred while fetching the movie or products.' });
  }
};



exports.searchMovies = async (req, res) => {
  try {
    const searchQuery = req.query.q;
    const movies = await Movie.find({
      $or: [
        { title: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } }
      ]
    });
    res.render('search', { movies, searchQuery });
  } catch (error) {
    res.status(500).render('error', { error });
  }
};