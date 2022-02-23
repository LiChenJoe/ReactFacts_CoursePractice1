import React from "react";
import Logo from "../react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img className="nav-logo" src={Logo} alt="react-logo" />
          <h2>love React</h2>
        </div>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
