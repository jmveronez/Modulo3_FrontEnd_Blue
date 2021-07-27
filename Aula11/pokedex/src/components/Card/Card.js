import { Link } from 'react-router-dom'
import "./Card.css"

export default function Card(){
    return(
        <Link to="/sobre/001" className="link">
        <div className="card">
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="Bulbasauro"></img>
        <div className="card-info">
            <p className="card-id">
                #001
            </p>
            <h2 className="card-name">Bulbasauro</h2>
            <div className="card-category">
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
            </div>
        </div>
        </div>
        </Link>
    )
}