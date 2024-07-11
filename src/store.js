import { createStore } from 'redux';
import { combineReducers } from 'redux';


const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const LOAD_TASKS = 'LOAD_TASKS';


export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });
export const editTask = (id, newTask) => ({ type: EDIT_TASK, payload: { id, newTask } });
export const toggleTask = (id) => ({ type: TOGGLE_TASK, payload: id });
export const loadTasks = (tasks) => ({ type: LOAD_TASKS, payload: tasks });


const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: Date.now(), task: action.payload, completed: false, date: new Date() }];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case EDIT_TASK:
      return state.map(task => task.id === action.payload.id ? { ...task, task: action.payload.newTask } : task);
    case TOGGLE_TASK:
      return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
    case LOAD_TASKS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});

export default store;
