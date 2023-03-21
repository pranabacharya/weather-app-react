import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} Pranab Acharya
    </div>
  );
};

export default Footer;
