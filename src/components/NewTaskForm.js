import React from "react";

function NewTaskForm({
  categories,
  onTaskFormSubmit,
  inputTask,
  inputCategory,
  setInputTask,
  setInputCategory,
}) {
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={inputTask.value}
          onChange={(event) => setInputTask(event.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={inputCategory.value}
          onChange={(event) => setInputCategory(event.target.value)}
        >
          {categories.map((member) => (
            <option key={member}>{member}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
