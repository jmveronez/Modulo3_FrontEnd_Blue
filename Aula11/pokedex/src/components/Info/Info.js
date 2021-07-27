import { Link } from 'react-router-dom'
import './Info.css'

export default function Info() {
    return(
        <div className="bloco">
        <section className="info">
            <div className="info-header">Bulbasauro</div>
            <div className="info-body">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="bulbasauro" />
            <div className="info-block">
                <p><strong>Altura:</strong> 0.7m</p>
                <p><strong>Peso:</strong> 6.9kg</p>
                <p><strong>Habilidades:</strong> Overgrow</p>
            </div>
            <div className="type">
                <p><strong>Tipo</strong></p>
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
            </div>
            </div>
            <div className="info-footer">
                <Link className="link" to="/">Voltar</Link>    
            </div>  
        </section>
        </div>
    )
}