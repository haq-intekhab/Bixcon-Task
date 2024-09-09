import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [sortOption, setSortOption] = useState("none");

  useEffect(() => {
    // Load tasks from local storage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSort = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
        if (sortOption === "alphabetical") {
          return a.text.localeCompare(b.text);
        } else if (sortOption === "status") {
          return a.completed - b.completed;
        }
        return 0;
      });
      setTasks(sortedTasks);
  }

  useEffect(() => {
    // Sort tasks when sortOption changes
    handleSort();
  }, [sortOption]);

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { text: taskInput, completed: false }]);
    setTaskInput("");
    toast.success("Task added successfully!");
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(newTasks);
    toast.success("Task marked as completed!");
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    toast.error("Task deleted!");
  };

  const handleInputChange = (e) => setTaskInput(e.target.value);

  const handleSortChange = (e) => setSortOption(e.target.value);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <div className="md:w-[50%] mx-auto p-6 bg-gradient-to-r from-teal-300 to-cyan-400 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={taskInput}
            onChange={handleInputChange}
            placeholder="Add a new task"
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-bg-from-green-400"
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-500
 text-white rounded-r-md"
          >
            Add Task
          </button>
        </div>
        <div className="w-full flex items-center">
          <p className="w-[50%] text-left text-xl font-semibold p-2">Tasks</p>
          <div className="mb-4 w-[50%]">
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bg-from-green-400"
            >
              <option value="none">Sort By</option>
              <option value="alphabetical">Alphabetical</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 border-b mb-2 border-gray-200 transition-transform duration-300 ease-in-out ${
                task.completed
      ? 'bg-green-200 text-green-700 border-green-300 rounded-md'
      : 'bg-white text-gray-800 border-gray-300 rounded-md'
              }`}
            >
              <div className="relative w-full flex justify-between items-center">
                <div className="md:w-[88%] w-[80%] overflow-x-scroll scroll-container">
                  <p className="text-left font-medium">
                    {index + 1}. {task.text}
                  </p>
                </div>
                {!task.completed && (
                  <IoCheckmarkCircleSharp
                    onClick={() => handleCompleteTask(index)}
                    className="absolute text-green-700 text-xl hover:text-green-500 top-1 right-6"
                  />
                )}
                {!task.completed && (
                  <RiDeleteBin2Fill
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-600 text-xl hover:text-red-400"
                />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
