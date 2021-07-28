import "./Card.css"
import { Link } from 'react-router-dom'

export default function Card(){
    return(
        <>
        <Link to="/infos/001" className="link">
        <div className="card">
            <div className="imagem">
                <img src="https://img.icons8.com/plasticine/400/rick-sanchez.png" alt="Rick"></img>
            </div>
            <div className="dados">
                <p className="nome">Rick Sanchez</p>
                <p className="status"><strong>Status: Vivo </strong></p>
                <p className="especie"><strong>Espécie: Humano </strong></p>
            </div>
        </div>
        </Link>
        </>
    )
}