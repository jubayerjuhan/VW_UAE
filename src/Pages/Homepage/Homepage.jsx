import React from "react";
import AllProducts from "../../Component/AllProducts/AllProducts.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import Herosection from "../../Component/Herosection/Herosection.jsx";
import Navbar from "../../Component/Navbar/Navbar.jsx";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <Navbar />
      <Herosection name="Hot Products" />
      <AllProducts name="All Products" />
      <Footer />
    </div>
  );
};

export default Homepage;
