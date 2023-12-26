import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Hero = (props) => {
    const { id } = useParams();
    const [hero, setHero] = useState(null)
    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }
    const goNext = () =>{
        navigate(1)
    }
    const nextHero = () => {
        console.log("HERO ID: ",id);
        let nextId = parseInt(id)+1
        console.log("NEXT HERO ID: ",nextId)
        navigate(`/hero/${nextId}`)
    }
    const getData = async () => {
        try {
            const result = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
            setHero(result.data)
            // return result.data
        }catch(error) {
            return nextHero()
        }
    }
    useEffect(() => {
        getData()
        // axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
        //     .then(response => {
        //         console.log(response.data)
        //         setHero(response.data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         nextHero()
        //         // navigate('/error')
        //     })
    }, [id])
    return (
        <>
            <h1>Hero</h1>
            <h2>HERO ID : {id}</h2>
            <h2 className='text-primary'>Turnery Operator </h2>
            {hero ? <div className="card shadow" style={{ width: "28rem" }}>
                <img src={hero.images.sm} className='card-img-top' alt="" />
                <div className="card-body">
                    <h5 className="card-title">{hero.name}</h5>
                    <p className="card-text h4">Intelligence :  {hero.powerstats.intelligence}</p>
                    <p className="card-text h4">Strength  : {hero.powerstats.strength}</p>
                    <p className="card-text h4">Speed  : {hero.powerstats.speed}</p>
                    <p className="card-text h4">Durability  : {hero.powerstats.durability}</p>
                    <p className="card-text h4">Power  : {hero.powerstats.power}</p>
                    <p className="card-text h4">Combat  : {hero.powerstats.combat}</p>
                    <div className='d-flex justify-content-between'>
                        <button onClick={goNext} className='btn btn-primary'>Next</button>
                        <button  onClick= {goBack} className='btn btn-warning'>Previous</button>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <button onClick={nextHero} className='btn btn-secondary'>Next HERO</button>
                        <button className='btn btn-success'>Previous HERO</button>
                    </div>
                </div>
            </div> : <h2 className='text-success'>... LOADING 🔃🔃🔃</h2>}
            {/* <hr />
            <h2 className='text-danger'>Short Circuit </h2> */}
            {/* {hero&&<div className="card shadow" style={{width:"28rem"}}>
                <img src="" className='card-img-top' alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>} */}
        </>
    )
}

export default Hero