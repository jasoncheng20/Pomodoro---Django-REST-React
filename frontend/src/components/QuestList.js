import React, { Component } from "react";
import './style.css'

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
      <div className ='questlist'>
        <ul>
          {this.state.data.map(quest => {
            return (
              <ul key={quest.id}>
                {quest.content}
                <br/>
                Difficulty: {quest.difficulty}
                <br/>
              </ul>
            );
          })}
        </ul>
        <a href="/api/quest/">Embark on a new quest</a>
      </div>
    );
  }
}