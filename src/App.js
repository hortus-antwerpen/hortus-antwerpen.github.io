import React from "react";
import "./App.css";
import Navigation from "./.core/navbar/navigation";
import Footer from "./footer/Footer";

class App extends React.Component {
  render() {
    return(
      <>
        <Navigation/>
        <Footer/>
      </>
    )
  }

}

export default App;
