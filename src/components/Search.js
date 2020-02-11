import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <form>
        <label style={{ fontSize: 32 }}>Filter:</label>
        <input
          type="text"
          style={{ fontSize: 68 }}
          onChange={e => this.props.handleChange(e)}
        />
      </form>
    );
  }
}

export default Search;
