import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [isSelected, setIsSelected] = useState(false);
  // console.log("CategoryFilter", categories);

  const allCategories = categories.map((member) => (
    <button
      key={member}
      // onClick={() => handleBtnClick(member)}
      onClick={handleBtnClick}
    >
      {member}
    </button>
  ));

  function handleBtnClick(event) {
    // console.log(allCategories[4].key);
    // console.log(event.target);
    // console.log("className", event.target.className);
    if (event.target.className === "") event.target.classList.add("selected");
    else if (event.target.className === "selected")
      event.target.classList.remove("selected");
    setIsSelected((isSelected) => !isSelected);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {allCategories}
    </div>
  );
}

export default CategoryFilter;
