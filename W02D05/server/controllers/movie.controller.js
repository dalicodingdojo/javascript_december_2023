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
module.exports.findOneMovieById = (req, res) => {
    Movie.findById({ _id: req.params.id })
        .then(oneMovie => {
            console.log("Movie Found", oneMovie);
            if(!oneMovie) {
                res.status(404).json({ error:"Movie Not Found", ok:false })
            }else{
                res.status(200).json({ data: oneMovie, message: 'Movie Found', ok: true })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })//[]
}
// Re
// Create
module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(newCreatedMovie => {
            console.log("New  Movie", newCreatedMovie);
            res.status(201).json({ data: newCreatedMovie, message: 'Movie Created with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}
// Update
// updateOneMovie
module.exports.updateOneMovie = (req, res) => {
    Movie.findOneAndUpdate({ _id: req.params.id }, req.body,  {new:true, runValidators:true})
        .then(updatedMovie => {
            console.log("Movie To Update", updatedMovie);
            res.status(200).json({ data: updatedMovie, message: 'Movie Updated with success', ok: true })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
}
// Delete
// deleteOneMovie
module.exports.deleteOneMovie = (req,res) => {
    Movie.findByIdAndDelete({_id: req.params.id})
    .then(deletedMovie => {
        console.log("Deleted Movie", deletedMovie);
        res.status(200).json({ data: deletedMovie, message: 'Movie deleted with success', ok: true })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    })
}