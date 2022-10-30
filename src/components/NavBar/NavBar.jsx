import React from "react";
import NavBrand from "./NavBrand";
import NavItems from "./NavItems";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavBrand />
      <NavItems
        onClickGridSize={props.onClickGridSize}
        onClickSearchPoint={props.onClickSearchPoint}
        onClickNavBtn={props.onClickNavBtn}
        onClickGenerateLand={props.onClickGenerateLand}
        onClickClearLand={props.onClickClearLand}
        row={props.row}
        col={props.col}
        searchState={props.searchState}
      />
    </nav>
  );
}

export default NavBar;
