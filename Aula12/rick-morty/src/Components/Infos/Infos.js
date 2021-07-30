import { useEffect, useState } from "react"
import "./Infos.css"
import { Link } from "react-router-dom"

export default function Infos(personagens){

    const [personagem, setPersonagem] = useState({})

    useEffect(() => {
        setPersonagem(personagens.location.state)
    }, [personagens.location.state])

    return(
        <div className="container">
        <div className="card-info">
        <div className="infos-imagem">
            <img src={personagem.gif} alt={personagem.name}></img>
        </div>
        <div className="infos">
            <div className="infos-dados">
                <p className="nome">{personagem.nome}</p>
                <p className="status"><strong>Status: {personagem.status} </strong></p>
                <p className="especie"><strong>Espécie: {personagem.especie} </strong></p>
            </div>
            <div className="historia">
                <p>{personagem.historia}</p>
            </div>
        <Link className="voltar" to="/">Voltar</Link>
        </div>
        </div>
        </div>
    )
}