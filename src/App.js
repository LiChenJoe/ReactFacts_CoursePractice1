import React from "react";

// One function set , section set are a component in React, and they are reuseable.
const App = () => {
  let friends = ["Adi", "Jessica", "Sama"];
  return (
    <div>
      <h1>My Profile</h1>
      <p>My name is Joe.</p>
      <p>I am 27 years old.</p>
      <p>My frineds are: </p>
      {friends.map((friend) => (
        <p>{friend}</p>
      ))}
    </div>
  );
};

export default App;
