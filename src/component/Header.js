import React from "react";
import Logo from "../react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={Logo} alt="react-logo" />
        <h1>ReactFacts</h1>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
}
