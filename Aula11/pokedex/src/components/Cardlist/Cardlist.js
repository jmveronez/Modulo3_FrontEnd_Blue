import "./Cardlist.css"
import Card from "../Card/Card"
import { useState } from "react"

export default function Cardlist() {

    const [pokemons, setPokemons] = useState([])
    
    let listPokemons = () => {
        setPokemons([
        {
            "id": 1,
            "name": "Bulbasaur",
            "img" : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            "altura": 0.7,
            "peso": 6.9,
            "habilidade": ["Overgrow"],
            "tipo1": "grass",
            "tipo2": "poison"
        },
        {
            "id": 2,
            "name": "Ivysaur",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
            "altura": 1.2,
            "peso": 15,
            "habilidade": ["Overgrow Melhorado"," Chicotada"],
            "tipo1": "grass",
            "tipo2": "poison"
        },
        {
            "id": 3,
            "name": "Venusaur",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
            "altura": 7,
            "peso": 85,
            "habilidade": ["Super Overgrow"],
            "tipo1": "grass",
            "tipo2": "poison"
        },
        {
            "id": 4,
            "name": "Charmander",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
            "altura": 0.9,
            "peso": 5,
            "habilidade": ["Rabinho de fogo"],
            "tipo1": "fire",
            "tipo2": "none"
        },
        {
            "id": 5,
            "name": "Charmeleon",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
            "altura": 1.5,
            "peso": 15,
            "habilidade": ["Rabo de fogo"],
            "tipo1": "fire",
            "tipo2": "none"
        },
        {
            "id": 6,
            "name": "Charizard",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
            "altura": 5,
            "peso": 125,
            "habilidade": ["Rabão de Fogo"],
            "tipo1": "fire",
            "tipo2": "flying"
        },
        {
            "id": 7,
            "name": "Squirtle",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
            "altura": 0.5,
            "peso": 5,
            "habilidade": ["Pistolinha d'água"],
            "tipo1": "water",
            "tipo2": "none"
        },
        {
            "id": 8,
            "name": "Wartotle",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
            "altura": 1.5,
            "peso": 25,
            "habilidade": ["Pistola d'água"],
            "tipo1": "water",
            "tipo2": "none"
        },
        {
            "id": 9,
            "name": "Blastoise",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
            "altura": 3,
            "peso": 150,
            "habilidade": ["Pistolão d'água"],
            "tipo1": "water",
            "tipo2": "none"
        },
        {
            "id": 10,
            "name": "Caterpie",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
            "altura": 0.2,
            "peso": 0.5,
            "habilidade": ["Cabeçadinha"],
            "tipo1": "bug",
            "tipo2": "none"
        },
        {
            "id": 11,
            "name": "Metapod",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
            "altura": 0.8,
            "peso": 35,
            "habilidade": ["To ficando duro"],
            "tipo1": "bug",
            "tipo2": "none"
        },
        {
            "id": 12,
            "name": "Butterfree",
            "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
            "altura": 2.2,
            "peso": 45,
            "habilidade": ["Moididinha"],
            "tipo1": "bug",
            "tipo2": "flying"
        },
        
    ])}
    console.log(pokemons)

    return(
        <>
        <div>
            <div className="card-list">
            {
                pokemons.map( (item) => (
                    <Card info={item} key={item.id} />
                ))
            }
            </div>
        </div>
        <button onClick={listPokemons}>Listar Pokemons</button>
        </>
    )
}