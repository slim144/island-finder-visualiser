import React from "react";
import GridSize from "./SetGridSize/GridSize";
import SearchPoint from "./SetSearchPoint/SearchPoint";
import NavButton from "./NavButton";
import NavItem from "./NavItem";

function NavItems(props) {
  return (
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <GridSize
        onClickGridSize={props.onClickGridSize}
        searchState={props.searchState}
      />
      <SearchPoint
        onClickSearchPoint={props.onClickSearchPoint}
        row={props.row}
        col={props.col}
        searchState={props.searchState}
      />
      <NavButton
        onClick={props.onClickNavBtn}
        searchState={props.searchState}
      />
      <NavItem
        name="Random Generate Land"
        onClick={props.onClickGenerateLand}
        lastItem={false}
        searchState={props.searchState}
      />
      <NavItem
        name="Clear Land"
        onClick={props.onClickClearLand}
        lastItem={true}
        searchState={props.searchState}
      />
    </ul>
  );
}

export default NavItems;
