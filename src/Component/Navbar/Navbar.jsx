import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navlinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Sign In", link: "/signin" },
    { label: "Sign Up", link: "/signup" },
  ];
  return (
    <div className="navbar__container">
      <div className="navbar__header section__padding">
        <p>Welcome To Vape World UAE.</p>
        <p>
          <span></span>+971 586290981
        </p>
      </div>
      <div className="navbar__logosection section__padding">
        <img src="http://vapeworlduae.com/images/logo.png" alt="logo" />
        <p>
          ⚠ Wrroning: This product contains nicotine, Nicotine is an addictive
          chemical.🔞
        </p>
      </div>

      <div className="navbar__navsection section__padding">
        {navlinks.map((navlink, index) => (
          <Navlinks key={index} label={navlink.label} link={navlink.link} />
        ))}
      </div>
    </div>
  );
};

const Navlinks = ({ label, link }) => (
  <div className="navbar__navlinks">
    <a href={link}>
      <p>{label}</p>
    </a>
  </div>
);

export default Navbar;
