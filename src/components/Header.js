import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Prdf_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Research and Events", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <div className="header-logo-text">
        <Link to="/" className="header-logo-link">
          <img src={logo} alt="PRDF Logo" />
        </Link>
        <div className="header-text">
          <h1>
            <Link to="/">PRDF</Link>
          </h1>

          <h4>For sustainable future</h4>
        </div>
      </div>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={isActive(item.path) ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
