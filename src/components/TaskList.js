import React from "react";
import Task from "./Task";

function TaskList({ tasks, onHandleDelete }) {
  // console.log("TaskList", tasks);
  const allTasks = tasks.map((member, index) => {
    return (
      <Task
        key={index}
        text={member.text}
        category={member.category}
        onHandleDelete={onHandleDelete}
      />
    );
  });

  // function onHandleDelete(event) {
  //   // allTasks.map((task) => {
  //   //   console.log(task.props.text);
  //   // });
  //   // console.log(event.target.parentElement.children[1].textContent);
  //   let filteredTasks = allTasks.filter(
  //     (task) =>
  //       task.props.text !== event.target.parentElement.children[1].textContent
  //   );
  //   console.log(filteredTasks);
  //   // setBtnClicked((btnClicked) => !btnClicked);
  // }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {allTasks}
      {/* {btnClicked ? filteredTasks : allTasks} */}
    </div>
  );
}

export default TaskList;
