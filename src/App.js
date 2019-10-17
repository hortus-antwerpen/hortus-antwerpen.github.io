import React from "react";
import "./App.css";
import Navigation from "./.core/navbar/navigation";
import Home from "./home/Home";
import Footer from "./footer/Footer";

class App extends React.Component {
  render() {
    return(
      <>
        <Navigation/>
        <Home/>
        <Footer/>
      </>
    )
  }
}

export default App;
