import { Link } from 'react-router-dom'
import './Info.css'
import {useState, useEffect} from 'react'

export default function Info(pokemon) {

    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        setPokemons(pokemon.location.state)
    }, [pokemon.location.state])

    return(
        <div className="bloco">
        <section className="info">
            <div className="info-header">{pokemons.name}</div>
            <div className="info-body">
            <img src={pokemons.img} alt={pokemons.name} />
            <div className="info-block">
                <p><strong>Altura:</strong>{pokemons.altura}</p>
                <p><strong>Peso:</strong>{pokemons.peso}</p>
                <p><strong>Habilidades:</strong>{pokemons.habilidade}</p>
            </div>
            <div className="type">
                <p><strong>Tipo</strong></p>
                <span className={pokemons.tipo1}>{pokemons.tipo1}</span>
                <span className={pokemons.tipo2}>{pokemons.tipo2}</span>
            </div>
            </div>
            <div className="info-footer">
                <Link className="link" to="/">Voltar</Link>    
            </div>  
        </section>
        </div>
    )
}