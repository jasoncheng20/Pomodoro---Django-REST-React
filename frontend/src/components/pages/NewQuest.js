import React, { Component } from "react";

export default class NewQuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        content: "",
        in_progress: false,
        completed: false,
        difficulty: 1,
      },
      createSuccess: false,
    };
  }

  handleChange = (event) => {
    let { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { createQuest, closeWindow } = this.props;
    const { form } = this.state;
    createQuest(form).then(() => {
      this.setState({ createSuccess: true });
    });
    closeWindow();
  };

  selectDifficulty = (event) => {
    let { form } = this.state;
    let { difficulty } = form;
    difficulty = event.target.value;
    this.setState({ difficulty });
  };

  toggleProgress = () => {
    let { form } = this.state;
    const { in_progress } = form;
    form.in_progress = in_progress === false ? true : false;
    this.setState({ form });
  };

  toggleComplete = () => {
    let { form } = this.state;
    const { completed } = form;
    form.completed = completed === false ? true : false;
    this.setState({ form });
  };

  render() {
    const { content, in_progress, completed, difficulty } = this.state.form;
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>Content:</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={this.handleChange}
          required
        />
        <label>In Progress:</label>
        <input
          type="checkbox"
          name="in progress"
          value={in_progress}
          onChange={this.toggleProgress}
        />
        <label>Completed:</label>
        <input
          type="checkbox"
          name="completed"
          value={completed}
          onChange={this.toggleComplete}
        />
        <label>Difficulty:</label>
        <select
          value={difficulty}
          name="difficulty"
          onChange={this.handleChange}
        >
          <option value={1}>Effortless</option>
          <option value={2}>Casual</option>
          <option value={3}>Fair</option>
          <option value={5}>Challenging</option>
          <option value={8}>Elite</option>
        </select>
        <input type="submit"/>
      </form>
      <button onClick = {this.props.closeWindow}>Close window</button>
      </div>
    );
  }
}
