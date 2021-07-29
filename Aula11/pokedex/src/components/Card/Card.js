import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./Card.css"

export default function Card(info){

    const [pokemon, setPokemon] = useState({})

    useEffect( () => {
        setPokemon(info.info)
    }, [info.info]);

    console.log(info.info)

    return(
        <Link className="link" to={{
            pathname: "/sobre/" + pokemon.id,
            state: pokemon
        }}>
        <div className="card">
        <img src={pokemon.img} alt={pokemon.name}></img>
        <div className="card-info">
            <p className="card-id">{pokemon.id}</p>
            <h2 className="card-name">{pokemon.name}</h2>
            <div className="card-category">
                <span className={pokemon.tipo1}>{pokemon.tipo1}</span>
                <span className={pokemon.tipo2}>{pokemon.tipo2}</span>
            </div>
        </div>
        </div>
        </Link>
    )
}