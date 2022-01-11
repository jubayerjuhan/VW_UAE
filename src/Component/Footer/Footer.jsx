import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerLinks = [
    { title: "Company", links: [{ url: "#" }, { url: "#" }, { url: "#" }] },
    {
      title: "Style Advisor",
      links: [{ url: "#" }, { url: "#" }, { url: "#" }],
    },
    { title: "Information", links: [{ url: "#" }, { url: "#" }, { url: "#" }] },
  ];

  const contactUs = [
    { icon: "fas fa-phone", description: "Call Us: +1-800-123-4567" },
    { icon: "fas fa-envelope", description: "support@vapeworlduae.com" },
    { icon: "fas fa-map-marker-alt", description: " Dragon Mart, Dubai, UAE" },
  ];

  return (
    <div className="footer__container section__padding">
      <div className="footer__logoside">
        <div className="footerlogoside__logo">
          <img src="http://vapeworlduae.com/images/logo.png" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            diam arcu.
          </p>
          <p className="copyright">© 2021 Vape World. All Rights Reserved.</p>
        </div>
      </div>
      {footerLinks.map((footerLink, index) => (
        <FooterLinksContainer
          key={index}
          title={footerLink.title}
          links={footerLink.links}
        />
      ))}
      <div className="footer__contact-us">
        <h4>Contact Us</h4>
        {contactUs.map((contact, index) => (
          <HorizontalList
            key={index}
            icon={contact.icon}
            title={contact.description}
          />
        ))}
      </div>
    </div>
  );
};

const FooterLinksContainer = ({ title, links }) => (
  <div className="footerlinks__container">
    <h4>{title}</h4>
    <div className="links__wrapper">
      {links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.url}
        </a>
      ))}
    </div>
  </div>
);

const HorizontalList = ({ icon, title }) => (
  <div className="horizontal__list-container">
    <div className="horizontal__list-icon">
      <i class={icon}></i>
    </div>
    <p>{title}</p>
  </div>
);
export default Footer;
