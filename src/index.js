import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MainContent from "./component/MainContent";
import "./styles/style.css";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
