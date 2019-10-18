import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <img src="img/logo_hortus.png" alt="logo" className="logo" />
        {/* <div className="flex-right hide-on-mobile">
          <Link to="/">HOME</Link>
          <Link to="/over-ons">OVER ONS</Link>
          <Link to="/galerij">GALERIJ</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className="show-on-mobile">
          <FontAwesomeIcon icon={faBars} />
        </div> */}
      </div>
    );
  }
}

export default Nav;
