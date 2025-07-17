import React from 'react';
import TaskItem from './taskitem';

function TaskList({ tasks, toggleComplete, deleteTask, updateTask }) {
  return (
    <ul className="list-group border-0">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
