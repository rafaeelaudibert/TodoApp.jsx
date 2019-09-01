import React, { Component, Fragment } from "react";
import TodoItem from "./components/todoItem";
import TodoInput from "./components/todoInput";
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

  handleNewItem = text => {
    if (text !== "") {
      const todos = this.state.todos.slice();
      const id = Math.max(todos.map(t => t.id)) + 1;
      console.log(text);

      this.setState({
        todos: [...todos, { id, text, selected: false }]
      });
    }
  };

  render() {
    const todosItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} onChange={this.handleChange} />
    ));

    return (
      <Fragment>
        <div className="container">
          {todosItems}
          <br />
          <TodoInput onClick={this.handleNewItem} />
        </div>
      </Fragment>
    );
  }
}

export default App;
