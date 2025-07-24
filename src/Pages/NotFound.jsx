import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ margin: "1rem 1.5rem" }}>
      <h1>404 Page NotFound</h1>
      <button className="btn" style={{ marginTop: "1rem" }}>
        <Link style={{ color: "white" }} to="/">
          Home Page
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
