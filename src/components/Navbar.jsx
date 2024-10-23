import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
          <Link to="/" className="nav_items">
            Home
          </Link>
          <Link to="/education" className="nav_items">
            Education
          </Link>
          <Link to="/experience" className="nav_items">
            Experience
          </Link>
          <Link to="/skills" className="nav_items">
            Skills
          </Link>
          <Link to="/projects" className="nav_items">
            Projects
          </Link>
          <Link to="/certificate" className="nav_items">
            Certificate
          </Link>
          <Link to="/contact" className="nav_items">
            Contact
          </Link>
          {/* <Link to="/clock" className="nav_items">
            Clock
          </Link>
          <Link to="/calendar" className="nav_items">
            Calendar
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
