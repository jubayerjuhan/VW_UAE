import React from "react";
import Card from "../Card/Card.jsx";
import Services from "../Services/Services.jsx";
import Tooltip from "../Tooltip/Tooltip.jsx";
import "./AllProducts.css";

const AllProducts = ({ name }) => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];

  const services = [
    {
      icon: "fas fa-truck",
      description: "Free Shipping",
    },
    {
      icon: "fas fa-chat",
      description: " CUSTOMER SUPPORT SERVICE 24/7",
    },
    {
      icon: "fas fa-shield-alt",
      description: "100% SECURE PAYMENT",
    },
    {
      icon: "fas fa-headset",
      description: "ONLINE SUPPORT 24/7",
    },
  ];

  return (
    <>
      <div className="allproducts__featured-services section__padding">
        {services.map((service, index) => (
          <Services icon={service.icon} description={service.description} />
        ))}
      </div>
      <div className="allproducts__container section__padding">
        <Tooltip name={name} />
        <div className="allProducts__wrapper" id="card">
          {products.map((product, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
