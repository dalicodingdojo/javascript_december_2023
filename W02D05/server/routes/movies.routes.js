const {findAllMovies, createNewMovie, findOneMovieById, updateOneMovie, deleteOneMovie}  = require('../controllers/movie.controller')

module.exports = (app) => {
    app.get('/api/movies', findAllMovies)
    app.post('/api/movies', createNewMovie)
    app.get('/api/movies/:id', findOneMovieById)
    app.put('/api/movies/:id', updateOneMovie)
    app.delete('/api/movies/:id', deleteOneMovie)
}