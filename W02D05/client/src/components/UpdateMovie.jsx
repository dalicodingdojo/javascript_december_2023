import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const UpdateMovie = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [movieToUpdate, setMovieToUpdate] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/movies/' + id)
            .then(response => {
                console.log(response)
                setMovieToUpdate(response.data.data)
            })
            .catch(error => console.log(error))
    }, [id])
    const update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/movies/' + id, movieToUpdate)
        .then(response => {
            console.log(response)
            navigate('/home')
        } )
        .catch(error => console.log(error))
    }
    return (
        <div className='container home p-3'>
            <form onSubmit={(e)=>{update(e)}}>
                <div className="row">
                    <div className="col">
                        {/* .form-group>label+input.form-control */}
                        <div className="form-group mb-3">
                            <label htmlFor=""> Title</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setMovieToUpdate({ ...movieToUpdate, title: e.target.value })}
                                value={movieToUpdate.title}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group mb-3">
                            <label htmlFor="">Release Year</label>
                            <input type="number" className="form-control"
                                onChange={(e) => setMovieToUpdate({ ...movieToUpdate, releaseYear: e.target.value })}
                                value={movieToUpdate.releaseYear}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group mb-3">
                            <label htmlFor=""> Image Url</label>
                            <input type="text" className="form-control"
                                onChange={(e) => setMovieToUpdate({ ...movieToUpdate, image: e.target.value })}
                                value={movieToUpdate.image}
                            />
                        </div>

                    </div>
                    <div className="col">
                        <div>
                            <img src={movieToUpdate.image} style={{ width: "300px", height: "400px" }} alt="" />
                        </div>
                    </div>
                </div>
                <div className="form-check-group mb-3">
                    <label htmlFor="form-check-label">Did you see this movie ?</label>
                    <input type="checkbox" className="form-check-input"
                        onChange={(e) => { setMovieToUpdate({ ...movieToUpdate, seen: !movieToUpdate.seen }) }}
                        checked={movieToUpdate.seen}
                    />
                </div>
                <button className='btn btn-info btn-lg w-50'>Update {movieToUpdate.title}</button>
            </form>
        </div>
    )
}

export default UpdateMovie