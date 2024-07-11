import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store, { loadTasks } from './store';
import { Provider } from 'react-redux';

const persistedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
store.dispatch(loadTasks(persistedTasks));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
