import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          Uno Moss
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/add-post">
            Plant Your Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
