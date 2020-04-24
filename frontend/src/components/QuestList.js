import React, { Component } from "react";
import "./style.css";

export default class QuestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
      error: null,
    };
  }

  componentDidMount() {
    this.getQuests();
  }

  getQuests() {
    fetch("api/quest")
      .then((response) => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then((data) => {
        this.setState(() => {
          return {
            data,
            loaded: true,
          };
        });
      });
  }

  createQuest(attrs) {
    return fetch("api/quest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quest: attrs }),
    }).then((response) => {
      if (response.status === 201) {
        this.getQuests();        
      }
    });
  }

  deleteQuest = (id) => {
    return fetch(`api/quest/${id}/`, {
      method: "DELETE",
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
          {this.state.data.map((quest, index) => {
            return (
              <ul key={index}>
                {quest.content} {quest.id}
                <br />
                Difficulty: {quest.difficulty}
                <br />
                <button onClick={() => deleteQuest(quest.id)}>Delete</button>
                <a href={`/api/quest/${quest.id}/`}>Details</a>
              </ul>
            );
          })}
        </ul>
        <a href="/api/quest/">Embark on a new quest</a>
      </div>
    );
  }
}
