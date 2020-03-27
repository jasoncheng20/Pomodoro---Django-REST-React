import React, { Component } from "react";
import { render } from "react-dom";

export default class QuestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/quest")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(quest => {
          return (
            <li key={quest.id}>
              {quest.content} | {quest.difficulty}
            </li>
          );
        })}
      </ul>
    );
  }
}