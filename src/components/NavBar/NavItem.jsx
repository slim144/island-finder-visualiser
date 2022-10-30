import React from "react";

function NavItem(props) {
  function handleClick(event) {
    props.onClick();
    event.preventDefault();
  }

  const searchStateClass =
    props.searchState === "SEARCHING" ? "disabled-link" : "enabled-link";

  return (
    <li className={`nav-item  ${props.lastItem ? "last-item" : ""} `}>
      <a
        className={`nav-link ${searchStateClass}`}
        href="/"
        onClick={handleClick}
      >
        {props.name}
      </a>
    </li>
  );
}

export default NavItem;
