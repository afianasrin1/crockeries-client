import React from "react";
import { Link } from "react-router-dom";
import footer1 from "../../../assets/images/footer1.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer1})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
      <div className="footer">
        <div>
          <span className="footer-title">CONTACT</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">ABOUT US</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
        </div>
        <div>
          <span className="footer-title">LINKS</span>
          <Link to="/" className="link link-hover">
            likhte hobe
          </Link>
          <Link to="/" className="link link-hover">
            likhte hobe
          </Link>
          <Link to="/" className="link link-hover">
            likhte hobe
          </Link>
        </div>
      </div>
      <div className="text-center mt-32">
        <p>Copyright © 2022 - All right reserved by Crockeries Gallery Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
