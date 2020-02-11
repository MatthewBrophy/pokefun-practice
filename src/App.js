import React from "react";
import PokemonDisplay from "./containers/PokemonDisplay";
import Search from "./components/Search";

const API = "https://pokeapi.co/api/v2/pokemon";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  getPokemon = () => {
    //fetch your Pokemon and store them in state
  };

  handleChange = e => {
    console.log(e);
    //filter your pokemon!
  };

  render() {
    return (
      <div className="app">
        <Search />
        <PokemonDisplay />
      </div>
    );
  }
}

export default App;
