import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, editTask, toggleTask } from '../store';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (task) => {
    setIsEditing(true);
    setTask(task.task);
    setCurrentTask(task);
  };

  const handleUpdateTask = () => {
    dispatch(editTask(currentTask.id, task));
    setTask('');
    setIsEditing(false);
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    
    <div className="todo-app">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task"
        onKeyPress={(e) => e.key === 'Enter' && (isEditing ? handleUpdateTask() : handleAddTask())}
      />
      <button onClick={isEditing ? handleUpdateTask : handleAddTask}>
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <div className="task-details">
              <span onClick={() => handleToggleTask(task.id)} style={{ cursor: 'pointer' }}>
                {task.task}
              </span>
              <span className="task-date">
                {new Date(task.date).toLocaleString()}
              </span>
                  
                          </div>
            <div className="task-actions">
              <button onClick={() => handleEditTask(task)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default TodoApp;
