import { Link } from "react-router-dom";

const HomePage = () => {
  const containerStyles = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyles}>
      <h2>
        <em>Welcome to Sgudi's eatery</em>
      </h2>
      <button style={{ marginTop: "1rem", width: "20vw" }} className="btn">
        <Link style={{ color: "white", fontSize: "1rem" }} to="../App">
          Menu
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
