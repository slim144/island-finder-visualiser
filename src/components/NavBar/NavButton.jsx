import React from "react";

function NavButton(props) {
  function handleClick() {
    props.onClick();
  }
  const searchStateClass =
    props.searchState === "START"
      ? "default-btn"
      : props.searchState === "SEARCHING"
      ? "searching-btn"
      : "end-btn";

  const buttonName =
    props.searchState === "START"
      ? "Search Island"
      : props.searchState === "SEARCHING"
      ? "Searching..."
      : "Reset";
  return (
    <button className={`btn btn-nav ${searchStateClass}`} onClick={handleClick}>
      {buttonName}
    </button>
  );
}

export default NavButton;
