import React from "react";
import "./App.css";
import Navbar from "./.core/navbar/navbar";
import Home from "./home/Home";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
