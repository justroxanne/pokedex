import React from 'react';

const NavBar = ({pokemonIndex, setPokemonIndex, pokemonList}) => {

    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex -1);
    }
    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1);
    }
    
    return (
        <div>
            {pokemonIndex > 0 ? <button className="button" onClick={handleClickPrevious}>Previous</button> : <button>No more item</button>}
            {pokemonIndex < pokemonList.length -1 ? <button className="button" onClick={handleClickNext}>Next</button> : <button>No more item</button>}
        </div>
    );
};

export default NavBar;
