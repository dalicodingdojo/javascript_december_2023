const {findAllMovies, createNewMovie}  = require('../controllers/movie.controller')

module.exports = (app) => {
    app.get('/api/movies', findAllMovies)
    app.post('/api/movies', createNewMovie)
}