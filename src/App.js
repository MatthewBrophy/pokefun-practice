import React from "react";
import PokemonDisplay from "./containers/PokemonDisplay";
import Search from "./components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonsStorage: [],
      pokemons: []
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(response =>
        this.setState({
          pokemonsStorage: response.results,
          pokemons: response.results
        })
      );
  };

  handleChange = e => {
    //filter your pokemon!
  };

  render() {
    return (
      <div className="app">
        <Search handleChange={this.handleChange} />
        <PokemonDisplay pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
