import React from "react";

function Task({ member, onHandleDelete }) {
  return (
    <div className={"task"}>
      <div className="label">{member.category}</div>
      <div className="text">{member.text}</div>
      <button onClick={() => onHandleDelete(member)} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
