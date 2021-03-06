import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class TodoInput extends Component {
  state = {
    value: ""
  };

  handleChange = event => this.setState({ value: event.target });

  handleClick = () => {
    this.props.onClick(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="todo-input">
        <input
          className="form-control"
          type="input"
          name="todo"
          value={this.state.value}
          onChange={event => this.handleChange(event)}
        />

        <button className="btn" type="button" onClick={this.handleClick}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    );
  }
}

export default TodoInput;
