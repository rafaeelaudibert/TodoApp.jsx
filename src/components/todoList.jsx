import React, { Component, Fragment } from "react";
import TodoItem from "./todoItem";
import TodoInput from "./todoInput";
import todosData from "../todosData";

class TodoList extends Component {
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
    if (text === "") return;

    const todos = this.state.todos.slice();
    const id = Math.max(todos.map(t => t.id)) + 1;

    this.setState({
      todos: [...todos, { id, text, selected: false }]
    });
  };

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} onChange={this.handleChange} />
    ));

    return (
      <Fragment>
        {todoItems}
        <TodoInput onClick={this.handleNewItem} />
      </Fragment>
    );
  }
}

export default TodoList;
