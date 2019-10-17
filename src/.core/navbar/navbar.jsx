import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const items = [
  {
    url: "/about",
    key: "Over Ons"
  },
  {
    url: "/gallery",
    key: "Galerij"
  },
  {
    url: "/contact",
    key: "Contact"
  }
]

class Navbar extends React.Component {
  render() {
    const {path, open, handleDrawerToggle } = this.props;
    return (
      // <div className="wrapper">
      //   <img src="img/logo_hortus.png" alt="logo" className="logo" />
      //   <div className="flex-right hide-on-mobile">
      //     <Router>
      //       <div>
      //         <Link to="/">Home</Link>
      //       </div>
      //       <p>OVER ONS</p>
      //       <p>GALERIJ</p>
      //       <p>CONTACT</p>
      //     </Router>
      //   </div>
      //   <div className="show-on-mobile">
      //     <FontAwesomeIcon icon={faBars} />
      //   </div>
      // </div>
      <div className="wrapper">
        {items.map(navItem => (
          <NavLink to={navItem.url}>
            <p>{navItem.key}</p>
          </NavLink>
        ))}
      </div>
    );
  }
}

export default Navbar;
