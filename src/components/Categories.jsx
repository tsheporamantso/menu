import React from "react";

const Categories = ({ uniqueCategories, filteredItem }) => {
  return (
    <div className="btn-container">
      {uniqueCategories.map((category) => {
        return (
          <button
            className="btn"
            key={category}
            onClick={() => {
              filteredItem(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
