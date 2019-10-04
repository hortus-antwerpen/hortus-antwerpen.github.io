import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Nav extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <img src="img/logo_hortus.png" alt="logo" className="logo" />
        <div className="flex-right hide-on-mobile">
          <p>HOME</p>
          <p>OVER ONS</p>
          <p>GALERIJ</p>
          <p>CONTACT</p>
        </div>
        <div className="show-on-mobile">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    );
  }
}

export default Nav;
