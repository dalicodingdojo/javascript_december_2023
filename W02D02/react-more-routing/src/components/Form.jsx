import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const navigate = useNavigate();
    const [heroId, setHeroId] = useState(0)
    const searchHero = (e) => {
        e.preventDefault()
        console.log("Hero ID :", heroId);
        navigate(`/hero/${heroId}`)
    }
    return (
        <div>
            <form onSubmit={(e)=>searchHero(e)}>
                <div className="form-group mb-3">
                    <label htmlFor="hero" className='h4'>Search for Hero</label>
                    <input type="number" className='form-control' id='hero' 
                    onChange={(e)=>{setHeroId(e.target.value)}}
                    value={heroId}
                    />
                </div>
                <div className="text-center">
                    <button className='btn btn-secondary btn-lg w-50'>Search</button>

                </div>
            </form>
        </div>
    )
}

export default Form