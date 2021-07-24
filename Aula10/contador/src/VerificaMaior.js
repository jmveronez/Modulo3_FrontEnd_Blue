import {useState, useEffect} from "react"

export default function Maior () {
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)
    const [maior, setMaior] = useState(0)
    const INCREMENTOS = [1, 2, 5, 10];
  

    function GetMaior() {
        useEffect(() => {
            if (valor1 > valor2){
                setMaior(valor1)
            } else if (valor2 > valor1){
                setMaior(valor2)
            } else {
                setMaior("Empate")
            }
        })
        return (<h2>Maior: {maior}</h2>)
        
    }

    return(
        <>
        <label>
            Valor 1:
            <input readOnly value={valor1}></input>
            {
                INCREMENTOS.map( item => {
                    return <button onClick= { () => {(setValor1(valor1 + item)) }}> {`+${item}`}</button>
                })
            }
        </label>
        <br />
        <br />
        <label>
            Valor 2:
            <input readOnly value={valor2}></input>
            {
                INCREMENTOS.map( item => {
                    return <button onClick= { () => {setValor2(valor2 + item)}}> {`+${item}`}</button>
                })
            }
        </label>
        <br />
        <br />
        <GetMaior />
        </>
    )
}