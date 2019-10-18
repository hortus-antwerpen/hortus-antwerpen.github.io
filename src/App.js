import React from "react";
import "./App.css";
import Navbar from "./_core/Nav";
import Home from "./home/Home";
import About from "./about/aboutPage";
import Contact from "./contact/contactPage";
import Gallery from "./gallery/galleryPage";
import Footer from "./footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/over-ons">
            <About />
          </Route>
          <Route path="/galerij">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
