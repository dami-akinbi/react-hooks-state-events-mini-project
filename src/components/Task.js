import React, { useState } from "react";

function Task({ text, category, onHandleDelete }) {
  const [btnClicked, setBtnClicked] = useState(false);

  function onHandleDelete() {
    setBtnClicked((btnClicked) => !btnClicked);
  }

  return (
    <div className={btnClicked ? "deleted" : "task"}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={onHandleDelete} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
