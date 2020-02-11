import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <form>
        <label style={{ fontSize: 32 }}>Filter:</label>
        <input type="text" style={{ fontSize: 68 }} onChange={null} />
      </form>
    );
  }
}

export default Search;
