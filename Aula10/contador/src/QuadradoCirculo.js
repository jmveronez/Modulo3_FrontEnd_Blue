import { useState } from "react";
import "./forma.css"


export default function QuadradoCirculo() {

    const quadrado = "quadrado"
    const circulo = "circulo"
    const [forma, setForma] = useState("")

    function ativarQuadrado(){
        setForma(quadrado)
    }

    function ativarCirculo(){
        setForma(circulo)
    }

    return(
        <>
        <div className={forma}>
            <p>{forma}</p>
        </div>
        <button onClick={ativarQuadrado}>Quadrado</button>
        <button onClick={ativarCirculo}>Circulo</button>
        </>
    )
}