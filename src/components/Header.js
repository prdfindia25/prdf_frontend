import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
      <h1>
        <Link to="/">PRDF</Link>
      </h1>
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
