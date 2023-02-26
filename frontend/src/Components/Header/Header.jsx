import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          ERRBud
        </a>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a> {/*TODO*/}
          </li>
          <li>
            <a href="/">About</a> {/*TODO*/}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
