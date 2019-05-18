import React from "react";

class ToDoItem extends React.Component {
  state = {
    items: [this.props.items]
  };

  render() {
    const { items } = this.state;
    console.log("State of the Item is: " + items);
    return (
      <div className="todo-item">
        <input type="checkbox" />
        {items.map(item => (
          <p>{item}</p>
        ))}
        <button onClick={this.props.deleteHandler}> Delete</button>
      </div>
    );
  }
}

export default ToDoItem;
