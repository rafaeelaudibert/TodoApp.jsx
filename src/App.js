import React, { Component } from "react";
import TodoItem from "./components/todoItem";
import todosData from "./todosData";

class App extends Component {
  state = {
    todos: todosData
  };

  handleChange = item => {
    const todos = this.state.todos.slice();
    const index = todos.indexOf(item);
    todos[index].completed = !todos[index].completed;

    this.setState({ todos });
  };

  render() {
    const todosItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} onChange={this.handleChange} />
    ));

    return <div className="todo-list">{todosItems}</div>;
  }
}

export default App;
