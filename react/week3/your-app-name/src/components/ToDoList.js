import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component {
  render() {
    const items = this.props.listItems;
    console.log("items from ToDoList (props.listItems): " + items);
    return (
      <div className="todo-list">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={item.id}>
              <ToDoItem
                deleteHandler={this.props.deleteButtonHandler.bind(this, index)}
                items={item.title}
              />
            </li>
          ))
        ) : (
          <p>No Items...</p>
        )}
      </div>
    );
  }
}

export default ToDoList;
