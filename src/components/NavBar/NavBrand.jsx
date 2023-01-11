import React from "react";
import logo from "../assets/navLogo.png";

function NavBrand() {
  return (
    <a className="navbar-brand" href="/">
      <img
        src={logo}
        alt="Logo"
        width="30"
        height="30"
        className="d-inline-block align-text-top"
      ></img>
      ISLAND FINDER
    </a>
  );
}

export default NavBrand;
