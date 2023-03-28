function PokemonCard(pokemon) {
    
    return (
        <figure className="pokemon_card" >
            { pokemon.imgSrc != undefined ?
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="picture of Bulbasaur" />
            :<p>???</p>
            }
            <figcaption className="pokename">{pokemon.name}</figcaption>
        </figure>);
}





export default PokemonCard;
