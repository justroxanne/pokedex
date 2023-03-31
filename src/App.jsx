import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from 'react';
import NavBar from './components/NavBar';
import {useEffect} from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type: "grass",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      type: "fire",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      type: "water",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      type: "electrik",
    },
    {
      name: "mew",
      type: "psy",
    },
  ]; 

function App() {
  useEffect(
    () => {
      alert('Hello pokemon trainer ! ٩(◕‿◕｡)۶');
    },
    []
  );

  const [pokemonIndex, setPokemonIndex] = useState(0);

  pokemonList[pokemonIndex].name === 'pikachu' ? alert('Pika pikachuuu !!') : "";

  return (<div className="pokemonBox">
    <div className="pokeball">
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
    <div className="navbar">
      {pokemonList.map((pokemonIndex, index) =>
      <NavBar key={pokemonIndex.name} setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} index={index}/>
      )}
    </div>
    </div>
  )
}



export default App;
