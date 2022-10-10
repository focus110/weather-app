import React from "react";

const Title = ({ title }) => {
  return (
    <h2 className="text-left text-sm font-semibold text-white">
      {title.toUpperCase()}
    </h2>
  );
};

export default Title;
