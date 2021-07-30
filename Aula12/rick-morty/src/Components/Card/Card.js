import "./Card.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"

export default function Card(info){

    const [personagem, setPersonagem] = useState({})

    useEffect( () => {
        setPersonagem(info.info)
    }, [info.info])
    return(
        <>
        <Link className="link" to={{
            pathname: "/sobre/" + personagem.id,
            state: personagem
        }} >
        <div className="card">
            <div className="imagem">
                <img src={personagem.img} alt={personagem.nome}></img>
            </div>
            <div className="dados">
                <p className="nome">{personagem.nome}</p>
                <p className="status"><strong>Status: {personagem.status} </strong></p>
                <p className="especie"><strong>Espécie: {personagem.especie} </strong></p>
            </div>
        </div>
        </Link>
        </>
    )
}