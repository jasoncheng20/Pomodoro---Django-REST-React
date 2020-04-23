import React, { Component } from "react";

export default class NewQuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        content: "",
        in_progress: "",
        completed: "",
        difficulty: "",
      },
      createSuccess: false,
    };
  }

  handleChange(e) {
    let { form } = this.state;
    form[event.target.name] = e.target.value;
    this.setState({ form });
  }

  handleSubmit(e) {}

  render() {
    const { content, in_progress, completed, difficulty } = this.state.form;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Content:
          <input
            type="text"
            name="content"
            value={content}
            onChange={this.handleChange}
          />
        </label>
        <label>
          In Progress:
          <input
            type="boolean"
            name="in progress"
            value={in_progress}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Completed:
          <input
            type="boolean"
            name="completed"
            value={completed}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Quest Difficulty:
          <select value={difficulty} onChange={this.handleChange}>
              <option value="1">Effortless</option>
              <option value="2">Casual</option>
              <option value="3">Fair</option>
              <option value="5">Challenging</option>
              <option value="8">Elite</option>
          </select>
        </label>
      </form>
    );
  }
}
