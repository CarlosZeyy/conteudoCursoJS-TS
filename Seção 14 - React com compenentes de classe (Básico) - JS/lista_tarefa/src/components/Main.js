import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./Main.css";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [
      'Comer',
      'Beber',
      'Jogar'
    ],
  };

  handlerChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handlerChange}
            type="text"
            className="inputField"
            value={newTask}
          />
          <button type="submit" className="taskBtn">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit"/>
                <FaWindowClose className="delete"/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
