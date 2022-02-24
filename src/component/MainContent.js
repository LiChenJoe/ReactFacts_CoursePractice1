import React from "react";
import Background from "../react_background.png";

export default function MainContent() {
  return (
    <div className="main">
      <h1>Fun Facts about React</h1>
      <ul>
        <li>Was frist released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Is maintain by Facebook</li>
        <li>Powers thousands of enterprise apps, includeing mobile apps</li>
      </ul>
      <img className="background" src={Background} alt="react-background" />
    </div>
  );
}
