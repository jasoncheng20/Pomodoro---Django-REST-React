import React, { Component } from "react";
import "./style.css";
import NewQuest from "./pages/NewQuest";

export default class QuestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questlist: [],
      loaded: false,
      placeholder: "Loading",
      showCreateBox: false,
    };
  }

  componentDidMount() {
    this.getQuests();
  }

  getQuests() {
    fetch("api/quest/")
      .then((response) => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then((response) => {
        this.setState(() => {
          return {
            questlist: response,
            loaded: true,
          };
        });
      });
  }

  createQuest = (attrs) => {
    return fetch("/api/quest/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attrs),
    }).then((response) => {
      if (response.status === 201) {
        this.getQuests();
      }
    });
  }

  toggleCreateBox() {
    this.setState({ showCreateBox: !this.state.showCreateBox });
  }

  deleteQuest = (id) => {
    return fetch(`api/quest/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 204) {
          this.getQuests();
        } else {
          return response.json;
        }
      })
      .then((payload) => {
        this.setState({ error: payload.error });
      });
  };

  render() {
    return (
      <div className="questlist">
        <ul>
          {this.state.questlist.map((quest, index) => {
            return (
              <ul key={index}>
                {quest.content}
                <br />
                Difficulty: {quest.difficulty}
                <br />
                <button onClick={() => this.deleteQuest(quest.id)}>
                  Delete
                </button>
                <a href={`/api/quest/${quest.id}/`}>Details</a>
              </ul>
            );
          })}
        </ul>
        <button onClick={() => this.toggleCreateBox()}>
          Embark on a new quest
        </button>
        {this.state.showCreateBox ? (
          <NewQuest createQuest = {this.createQuest} closeWindow={this.toggleCreateBox} />
        ) : null}
      </div>
    );
  }
}
