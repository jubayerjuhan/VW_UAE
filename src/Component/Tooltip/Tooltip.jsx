import React from "react";
import "./Tooltip.css";

const Tooltip = ({ name }) => {
  return (
    <div className="comp__tooltip">
      <h4>{name}</h4>
    </div>
  );
};

export default Tooltip;
