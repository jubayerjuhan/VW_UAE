import React from "react";
import "./Services.css";

const Services = ({ description, icon }) => {
  return (
    <div className="services__comp-container">
      <i class={`fas ${icon}`}></i>
      <p>{description}</p>
      <p>Fash Shipping</p>
    </div>
  );
};

export default Services;
