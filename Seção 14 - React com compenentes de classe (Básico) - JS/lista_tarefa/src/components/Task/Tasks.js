import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./Tasks.css";

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />

            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
