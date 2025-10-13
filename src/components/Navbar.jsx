// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/mahindra-logo.png";

function Navbar() {
  const location = useLocation();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Cars", path: "/cars" },
    // { name: "Services", path: "/services" },
    // { name: "Career", path: "/career" },
    // { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Mahindra Logo" className="navbar-logo" />
        <h1 className="navbar-title">Apex Auto Group</h1>
      </div>

      <ul className="nav-links">
        {pages.map((page) => (
          <li
            key={page.name}
            className={`nav-item ${
              location.pathname === page.path ? "active" : ""
            }`}
          >
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
