import React from "react";
import "./App.css";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Nav from "./components/Navbar.js/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
