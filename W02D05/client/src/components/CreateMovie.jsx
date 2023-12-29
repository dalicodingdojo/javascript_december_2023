import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateMovie = (props) => {
    const navigate = useNavigate()
    const [newMovie, setNewMovie] = useState({ title: "", releaseYear: 1800, image: "", seen: true })
    const createNewMovie = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/movies', newMovie)
        .then(response => {
            console.log(response);
            navigate('/home')
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='container home p-3'>
            <form onSubmit={(e)=>createNewMovie(e)}>
                <div className="row">
                    <div className="col">
                        {/* .form-group>label+input.form-control */}
                        <div className="form-group mb-3">
                            <label htmlFor=""> Title</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                                value={newMovie.title}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group mb-3">
                            <label htmlFor="">Release Year</label>
                            <input type="number" className="form-control"
                                onChange={(e) => setNewMovie({ ...newMovie, releaseYear: e.target.value })}
                                value={newMovie.releaseYear}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor=""> Image Url</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })}
                        value={newMovie.image}
                    />
                </div>
                <div className="form-check-group mb-3">
                    <label htmlFor="form-check-label">Did you see this movie ?</label>
                    <input type="checkbox" className="form-check-input"
                    onChange={(e) => {setNewMovie({...newMovie,seen:!newMovie.seen})}}
                    checked={newMovie.seen}
                    />
                </div>
                <button className='btn btn-info btn-lg w-50'>Add YOUR MOVIE</button>
            </form>
        </div>
    )
}

export default CreateMovie