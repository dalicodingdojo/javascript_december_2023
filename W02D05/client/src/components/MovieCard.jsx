import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie , deleteMovie}) => {
    return (
        <div className="card movie-card p-2 shadow" >
            <img className="card-img-top movie-img rounded" src={movie.image} alt="Card image cap" />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{movie.title}</h5>
                    <h5 className="card-title">{movie.releaseYear}</h5>
                </div>
                <h4>{movie.seen? "👁️👁️":"😎😎"}</h4>
                <div className="d-flex justify-content-between">
                    <Link to={`/movies/${movie._id}/edit`} className="btn btn-warning">Update</Link>
                    <button onClick={()=>deleteMovie(movie._id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard