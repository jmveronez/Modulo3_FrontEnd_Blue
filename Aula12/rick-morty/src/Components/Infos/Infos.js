import "./Infos.css"

export default function Infos(){
    return(
        <div className="container">
        <div className="card-info">
        <div className="infos-imagem">
            <img src="https://giffiles.alphacoders.com/118/118784.gif" alt="Rick"></img>
        </div>
        <div className="infos">
            <div className="infos-dados">
                <p className="nome">Rick Sanchez</p>
                <p className="status"><strong>Status: Vivo </strong></p>
                <p className="especie"><strong>Espécie: Humano </strong></p>
            </div>
            <div className="historia">
                <p>Rick Sanchez é um cientista conhecido intergalacticamente por ser (segundo ele próprio), o maior gênio do Universo. Depois de vinte anos afastado da filha, Beth, ele passa a viver na garagem da casa da família Smith</p>
            </div>
        </div>
        </div>
        </div>
    )
}