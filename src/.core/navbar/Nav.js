import React from "react";
import "../../App.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="logo">
          <img src="img/logo_hortus.png" alt="logo" height="85" />
        </div>
        <div className="flex-right">
          <p>HOME</p>
          <p>OVER ONS</p>
          <p>GALERIJ</p>
          <p>CONTACT</p>
        </div>
      </div>
    );
  }
}

export default Nav;
