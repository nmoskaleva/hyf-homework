import React from "react";
import Search from "./Search";
import Userslist from "./Userslist";

class App extends React.Component {
  state = { users: [], requestState: "start", inputValue: "" };

  //is it fine to setState in this function?
  getUsers = userLogin => {
    this.setState({ requestState: "loading" });
    return fetch("https://api.github.com/search/users?q=" + userLogin).then(
      response => response.json()
    );
  };

  inputChangeHandler = e => {
    const newInputValue = e.target.value;
    this.setState({ inputValue: newInputValue });
  };

  searchButtonHandler = () => {
    const { inputValue } = this.state;
    this.getUsers(inputValue).then(users =>
      this.setState({ users: users.items, requestState: "done" })
    );
  };

  //without this, it will keep showing 'loading'
  componentDidMount() {
    this.setState({ requestState: "done" });
    console.log(
      "current state from componentDidMount: " + this.state.requestState
    );
  }

  componentDidUpdate() {
    console.log("I updated");
  }

  render() {
    return (
      <div>
        <h1>Github Users</h1>
        <Search
          handleInput={this.inputChangeHandler}
          buttonHandler={this.searchButtonHandler}
        />

        {this.state.requestState === "loading" ? (
          <p>loading...</p>
        ) : (
          <Userslist
            gitHubUsers={this.state.users}
            parentState={this.state.requestState}
          />
        )}
      </div>
    );
  }
}

export default App;
