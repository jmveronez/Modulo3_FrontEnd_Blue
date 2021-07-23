import "./block.css"
import { useState } from "react"

export default function Bloco(){

    const [escolha, SetEscolha] = useState({
        "0": " ",
        "1": " ",
        "2": " ",
        "3": " ",
        "4": " ",
        "5": " ",
        "6": " ",
        "7": " ",
        "8": " "
        });

    function AlterarEscolha(escolha) {
        if (escolha == " "){
            SetEscolha[escolha]("X")
        } else if (escolha === "X"){
            SetEscolha[escolha]("O")
        } else if (escolha === "O"){
            SetEscolha[escolha](" ")
        }
    }

    return (
        <>
        <header>
            <h1>Jogo da Velha</h1>
        </header>
        <main>
            <div className="joguin">
                <div className="block" onClick={ () => AlterarEscolha(escolha[0])}>{escolha[0]}</div>

                <div className="block" onClick={ () => AlterarEscolha(escolha[1])}>{escolha[1]}</div>

                <div className="block" onClick={ () => AlterarEscolha(escolha[2])}>{escolha[2]}</div>

                <div className="block" onClick={ () => AlterarEscolha(escolha[3])}>{escolha[3]}</div>

                <div className="block" onClick={ () => AlterarEscolha(escolha[4])}>{escolha[4]}</div>

                <div className="block" onClick={ () => AlterarEscolha(escolha[5])}>{escolha[5]}</div>

                <div className="block" onClick={ () => AlterarEscolha(escolha[6])}>{escolha[6]}</div>

                <div className="block" onClick={ () => AlterarEscolha(escolha[7])}>{escolha[7]}</div>

                <div className="block" onClick={ () => AlterarEscolha(escolha[8])}>{escolha[8]}</div>

            </div>
        </main>
        </>
        )
}