import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
