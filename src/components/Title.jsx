import React from "react";

const Title = ({ text }) => {
  return (
    <h2 className="title">
      {text || "Default Text"}
      <div className="title-underline"></div>
    </h2>
  );
};

export default Title;
