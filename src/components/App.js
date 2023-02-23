import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [highlighted, setHighlighted] = useState(true);
  const [inputTask, setInputTask] = useState("");
  const [inputCategory, setInputCategory] = useState("All");

  function onTaskFormSubmit(event) {
    event.preventDefault();
    // console.log(event.target);
    // if (event.target.value === "All") {}
    // console.log("Task", inputTask);
    // console.log("Category", inputCategory);
    const newTask = { text: inputTask, category: inputCategory };
    // console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  function onHandleDelete(obj) {
    // console.log("HandleDelete", obj);
    let filteredTasks = tasks.filter((task) => task.text !== obj.text);
    setTasks(filteredTasks);

    // work on App.js (here) for most hooks
    // have hooks passed down as props to their respective components
  }

  function handleBtnClick(obj) {
    // console.log("HandleClick", obj.target);
    setHighlighted((highlighted) => !highlighted);

    let filteredTasks;
    if (highlighted === true) {
      obj.target.classList.add("selected");
      filteredTasks =
        obj.target.textContent === "All"
          ? tasks
          : tasks.filter((task) => task.category === obj.target.textContent);
      setTasks(filteredTasks);
    } else {
      obj.target.classList.remove("selected");
      setTasks(TASKS);
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleBtnClick={handleBtnClick} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
        inputTask={inputTask}
        inputCategory={inputCategory}
        setInputTask={setInputTask}
        setInputCategory={setInputCategory}
      />
      <TaskList tasks={tasks} onHandleDelete={onHandleDelete} />
    </div>
  );
}

export default App;
