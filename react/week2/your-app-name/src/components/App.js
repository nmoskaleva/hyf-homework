import React from "react";
import Main from "./Main";
import Header from "./Header";
import ToDoList from "./ToDoList";

class App extends React.Component {
  state = {
    items: [
      { text: "Get out of bed", id: 10, done: "true" },
      { text: "Brush teeth", id: 11, done: "false" }
    ]
  };

  addItem = newTaskText => {
    const newItem = { text: newTaskText, id: 1 };
    this.state.items.length > 0
      ? (newItem.id = this.state.items[this.state.items.length - 1].id + 1)
      : (newItem.id = 1);
    const newItems = this.state.items.concat(newItem);
    this.setState({ items: newItems });
    console.log("newItemId is: " + newItem.id);
  };

  deleteButtonHandler = (index, e) => {
    const items = Object.assign(
      [],
      this.state.items
    ); /*Object.assign takes a state, creates a duplicate array*/
    items.splice(index, 1);
    this.setState({ items: items });
    console.log("deleted");
  };

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div>
        <Header />
        <Main addItem={this.addItem} />
        <ToDoList
          listItems={items}
          deleteButtonHandler={this.deleteButtonHandler}
        />
      </div>
    );
  }
}

export default App;
