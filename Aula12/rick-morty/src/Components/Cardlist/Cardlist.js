import Card from "../Card/Card"
import { useState } from "react"
import "./Cardlist.css"

export default function Cardlist(){

    const [personagem, setPersonagem] = useState([])

    let listPersonagens = () => {
        setPersonagem([
        {
            "id": 1,
            "nome": "Rick Sanchez",
            "img": "https://img.icons8.com/plasticine/400/rick-sanchez.png",
            "gif": "https://giffiles.alphacoders.com/118/118784.gif",
            "status": "Vivo",
            "especie": "Humano",
            "historia": "Rick Sanchez é um cientista conhecido intergalacticamente por ser (segundo ele próprio), o maior gênio do Universo. Depois de vinte anos afastado da filha, Beth, ele passa a viver na garagem da casa da família Smith"
        },
        {
            "id": 2,
            "nome": "Morty Smith",
            "img" : "https://img.icons8.com/plasticine/100/000000/morty-smith.png",
            "gif": "https://i.pinimg.com/originals/e3/43/29/e34329a5d91deb80316b9b3f0a7e01ba.gif",
            "status": "Vivo",
            "especie": "Humano",
            "historia": "Mortimer (Morty) Smith é um dos personagens-título da série de animação americana Rick and Morty. Criado por Justin Roiland e Dan Harmon, Morty é um ansioso garoto de 14 anos baseado em Marty McFly de Back to the Future."
        },
        {
            "id": 3,
            "nome": "Summer Smith",
            "img": "https://img.icons8.com/plasticine/452/summer-smith.png",
            "gif": "https://media1.tenor.com/images/c506ccc51017521f7b430a556e6abb4a/tenor.gif?itemid=9544178",
            "status": "Vivo",
            "especie": "Humano",
            "historia": "Summer Smith é um dos personagens principais da série de animação americana Rick e Morty. Criado por Justin Roiland e Dan Harmon, Summer é uma adolescente convencional e muitas vezes superficial e inicialmente de 17 anos, que está obcecada em melhorar seu status social entre seus pares."
        },
        {
            "id": 4,
            "nome": "Beth Smith",
            "img": "https://img.icons8.com/plasticine/400/beth-smith.png",
            "gif": "https://i.imgur.com/pUVtIqL.gif",
            "status": "Vivo",
            "especie": "Humano",
            "historia": "Beth Smith (née Sanchéz) - É filha de Rick, esposa de Jerry e mãe de Summer e Morty, aos 34. Como seu pai, ela bebe muito e é bastante inteligente, mas ao contrário dele, é sempre responsável."
        },
        {
            "id": 5,
            "nome": "Jerry Smith",
            "img": "https://img.icons8.com/plasticine/100/000000/jerry-smith.png",
            "gif": "https://68.media.tumblr.com/368d89af7f369de7050e7f82bc602474/tumblr_inline_ou98h3cB871tzjsjy_540.gif",
            "status": "Vivo",
            "especie": "Humano",
            "historia": "Gerald (Jerry) Smith é um dos personagens principais da série de animação americana Rick e Morty. Criado por Justin Roiland e Dan Harmon e dublado por Chris Parnell, Jerry é um ex-agente de publicidade inseguro que freqüentemente é levado a conflitos decorrentes de posturas oportunistas."
        }
        ])}

    return (
        <>
            <div>
                <div className="container">
                    {
                        personagem.map( (item) => (
                            <Card info={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
            <div className="botao">
                <button onClick={listPersonagens}>Listar Personagens</button>
            </div>
        </>
    )
}