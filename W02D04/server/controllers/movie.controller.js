const Movie = require('../models/movie.model')

// Read All
// findAllMovies
module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then(allMovies => {
            console.log("All Movies From DB", allMovies);
            res.status(200).json({ data: allMovies, message: 'All Movies List', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })//[]
}
// Read One
// findOneMovie
// Create
module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(newCreatedMovie => {
            console.log("New  Movie", newCreatedMovie);
            res.status(201).json({ data: newCreatedMovie, message: 'Movie Created with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })
}
// Update
// updateOneMovie
// Delete
// deleteOneMovie