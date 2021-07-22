import {useState} from "react";
import "./card.css"

export default function Card(props) {

    const [passou, setPassou] = useState('Reprovado');

    function PassarAluno() {
        if (passou === "Reprovado"){
            setPassou('Aprovado')
        }
        else if(passou === "Aprovado"){
            setPassou('Reprovado')
        }
    }

    let media = (props.nota1 + props.nota2 + props.nota3 + props.nota4) / 4

    return (
        <div className="card">
            <h2>{props.nome}</h2>
            <hr />
            <p>Nota 1: {props.nota1}</p>
            <p>Nota 2: {props.nota2}</p>
            <p>Nota 3: {props.nota3}</p>
            <p>Nota 4: {props.nota4}</p>
            <hr />
            <p>Média: {media}</p>
            <button onClick={ () => PassarAluno()} >{passou}</button>
        </div>
    )
}