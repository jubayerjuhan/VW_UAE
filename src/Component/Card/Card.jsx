import React, { useState } from "react";
import "./Card.css";

const Card = ({ image }) => {
  const [mouse, setMouse] = useState(false);

  let className = mouse ? "card-hover" : "";

  return (
    <div
      className="card__container"
      onMouseEnter={() => setMouse(!mouse)}
      onMouseLeave={() => setMouse(!mouse)}
    >
      <div className="card__image">
        <div className="card__image-sale">
          <span>Sale</span>
        </div>
        <div className="background"></div>
        <img
          className="card-hover"
          src="http://vapeworlduae.com/products-images/p1.jpg"
          alt=""
        />
      </div>
      <div className="card__button">
        <p>AED</p>
      </div>
    </div>
  );
};

export default Card;
