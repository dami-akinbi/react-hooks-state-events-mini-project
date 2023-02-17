import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  // console.log("TaskList", tasks);
  const allTasks = tasks.map((member, index) => {
    return <Task key={index} text={member.text} category={member.category} />;
  });
  // console.log(allTasks);

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {allTasks}
    </div>
  );
}

export default TaskList;
