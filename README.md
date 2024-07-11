# To-Do Application

A simple and responsive To-Do application built using ReactJS and Redux. This application allows users to add, view, edit, delete, and mark tasks as completed. Tasks are stored in local storage, ensuring persistence across page reloads.

## Features

- Add new tasks with a timestamp.
- View a list of all tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or uncompleted.
- Persist tasks in local storage.
- Scrollable task list for better user experience.

## Technologies Used

- ReactJS
- Redux
- JavaScript
- HTML
- CSS

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ogpavan/todo-app.git

Navigate to the project directory:

cd todo-app



npm install

Running the Application

Start the React development server:
npm run dev
Open your web browser and navigate to:


Project Structure
src/
  components/
	TodoApp.js - Main component of the application.
	store.js - Redux store configuration and reducers.
	index.js - Entry point of the application.
	index.css - CSS styles for the application.
	Redux Store
The Redux store manages the state of tasks. The following actions are available:

ADD_TASK - Adds a new task.

DELETE_TASK - Deletes a task.
EDIT_TASK - Edits an existing task.
TOGGLE_TASK - Toggles the completion status of a task.
LOAD_TASKS - Loads tasks from local storage.

Component Details

TodoApp Component
Renders the input field for adding new tasks.
Displays the list of tasks with options to edit, delete, and toggle completion.
Connects to the Redux store to manage the state of tasks.
Styles


The application includes basic CSS styles in index.css. The task list is scrollable to enhance user experience.



License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
React
Redux
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

lease fork the repository and submit a pull request for any enhancements or bug fixes.
