# React To-Do List Application

This is a simple To-Do List application built with React. It allows users to add, complete, and delete tasks, as well as sort tasks by alphabetical order or status. The application uses local storage to persist tasks across browser sessions and provides user feedback via toast notifications.

## Features

- **Add Tasks**: Users can add new tasks to the list.
- **Complete Tasks**: Mark tasks as completed.
- **Delete Tasks**: Remove tasks from the list.
- **Sort Tasks**: Sort tasks either alphabetically or by status.
- **Local Storage**: Persist tasks in local storage to retain data across page reloads.
- **Toast Notifications**: Provide feedback on task actions.

## Installation

To get started with this application, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/haq-intekhab/Bixcon-Task.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd Bixcon-Task
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm run start
    ```

   This will start the development server and open the application in your default web browser.

## Usage

- **Adding a Task**: Type a task in the input field and click "Add Task" to add it to the list.
- **Completing a Task**: Click the checkmark icon next to a task to mark it as completed.
- **Deleting a Task**: Click the trash bin icon next to a task to delete it from the list.
- **Sorting Tasks**: Use the dropdown menu to sort tasks alphabetically or by their completion status.

## Code Explanation

- **State Management**: 
  - `tasks`: Stores the list of tasks.
  - `taskInput`: Stores the value of the input field for new tasks.
  - `sortOption`: Determines the sorting method for tasks.

- **Effect Hooks**:
  - `useEffect` to load tasks from local storage when the component mounts.
  - `useEffect` to save tasks to local storage whenever the tasks array changes.
  - `useEffect` to sort tasks when the `sortOption` changes.

- **Event Handlers**:
  - `handleAddTask`: Adds a new task to the list and shows a success toast.
  - `handleCompleteTask`: Marks a task as completed and shows a success toast.
  - `handleDeleteTask`: Deletes a task and shows an error toast.
  - `handleSortChange`: Updates the sorting option based on user selection.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **react-hot-toast**: For displaying toast notifications.
- **react-icons**: For icons used in the application.
- **Tailwind CSS**: Utility-first CSS framework for styling.
---
