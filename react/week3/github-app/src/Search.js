import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter username"
          onChange={this.props.handleInput}
        />
        <button onClick={this.props.buttonHandler}>Search</button>
      </div>
    );
  }
}

export default Search;
