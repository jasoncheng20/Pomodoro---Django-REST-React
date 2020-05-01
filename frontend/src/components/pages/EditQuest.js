import React, { Component } from "react";

export default class EditQuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      editSuccess: false,
    };
  }

  componentDidMount () {
    this.getQuest()
  }

  getQuest () {
    let { showQuest } = this.props
    showQuest(this.props.id).then(response => {
      this.setState({ form: response })
    })
  }

  handleChange = (event) => {
    let { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { editQuest, closeWindow } = this.props;
    const { form } = this.state;
    editQuest( form.id, form).then(() => {
      this.setState({ editSuccess: true });
    });
    closeWindow();
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
        <h3>Edit Quest!</h3>
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
