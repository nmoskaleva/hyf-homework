import React from "react";

class Main extends React.Component {
  state = {
    inputValue: ""
  };

  inputChangeHandler = e => {
    const newState = e.target.value;
    this.setState({ inputValue: newState });
    console.log(this.state);
  };

  clickHandler = () => {
    const { inputValue } = this.state;
    this.props.addItem(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="enter-new-todo">
        <p>Enter description</p>
        <input
          type="text"
          placeholder="enter new task"
          value={inputValue}
          onChange={this.inputChangeHandler}
        />
        <button onClick={this.clickHandler}>Add</button>
      </div>
    );
  }
}

export default Main;
