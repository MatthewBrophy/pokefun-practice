import React, { Component } from "react";
import Pokemon from "../components/Pokemon";

class PokemonDisplay extends Component {
  render() {
    return (
      <div>
        {this.props.pokemons.map((pokemon, i) => (
          <Pokemon pokemon={pokemon} key={i} />
        ))}
      </div>
    );
  }
}

export default PokemonDisplay;
