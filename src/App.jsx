import './App.css'
import PokemonCard from "./components/PokemonCard"
import { useState } from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrevious = () =>
    setPokemonIndex(pokemonIndex -1);

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  }
  
  return (<div>
    <div className="pokeball">
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
    {pokemonIndex > 0 ? <button className="button" onClick={handleClickPrevious}>Previous</button> : <button>No more item</button>}
    {pokemonIndex < pokemonList.length -1 ? <button className="button" onClick={handleClickNext}>Suivant</button> : <button>No more item</button>}
    </div>
  )
}


// function App() {
//   return (
//     <div className="pokeball">
//       {pokemonList.map(pokemon => (
//         <PokemonCard key={pokemon.name}{...pokemon}/>
//       ))}
//     </div>
//     );
// }

export default App;
