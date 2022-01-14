import React from "react";

const Friends = ({ name, age, desc }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <p>Intro: {desc}</p>
    </div>
  );
};

export default Friends;
