import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";

//In React.StrictMode, use self-closig tag to refer the app function.
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
