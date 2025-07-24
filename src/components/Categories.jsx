import { Link } from "react-router-dom";

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
      <button className="btn">
        <Link style={{ color: "white" }} to="/">
          Home Page
        </Link>
      </button>
    </div>
  );
};

export default Categories;
