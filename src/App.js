import React from "react";
import Friends from "./Friends";

// One function set , section set are a component in React, and they are reuseable.
const App = () => {
  let friends = [
    { name: "Harry", age: 17, desc: "This is smart Harry." },
    { name: "Ron", age: 17, desc: "I am silly Ron." },
    { name: "Snap", age: 50, desc: "I am coming to get Harry!" },
  ];
  return (
    <div>
      <h1>Profile</h1>
      {friends.map((friend) => (
        <Friends name={friend.name} age={friend.age} desc={friend.desc} />
      ))}
    </div>
  );
};

export default App;
