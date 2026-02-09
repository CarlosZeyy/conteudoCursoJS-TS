import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
  };

  handlerChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handlerChange}
            type="text"
            className="inputField"
            value={novaTarefa}
          />
          <button type="submit" className="sendBtn">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
