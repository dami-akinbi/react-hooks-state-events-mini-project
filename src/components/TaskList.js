import React from "react";
import Task from "./Task";

function TaskList({ tasks, onHandleDelete }) {
  // console.log("TaskList", tasks);
  const allTasks = tasks.map((member, index) => {
    return <Task key={index} member={member} onHandleDelete={onHandleDelete} />;
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {allTasks}
    </div>
  );
}

export default TaskList;
