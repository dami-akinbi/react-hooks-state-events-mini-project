import React from "react";

function CategoryFilter({ categories, handleBtnClick }) {
  const allCategories = categories.map((member) => (
    <button key={member} onClick={handleBtnClick}>
      {member}
    </button>
  ));

  // function handleBtnClick(event) {
  //   if (event.target.className === "") event.target.classList.add("selected");
  //   else if (event.target.className === "selected")
  //     event.target.classList.remove("selected");
  //   setIsSelected((isSelected) => !isSelected);
  // }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {allCategories}
    </div>
  );
}

export default CategoryFilter;
