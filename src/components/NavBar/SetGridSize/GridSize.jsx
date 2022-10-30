import React from "react";
import DropDownItems from "./GridSizeItems";

function GridSize(props) {
  const searchStateClass =
    props.searchState === "START" ? "enabled-link" : "disabled-link";

  return (
    <li className="nav-item dropdown">
      <a
        className={`nav-link dropdown-toggle ${searchStateClass}`}
        href="/"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Grid Size
      </a>
      <ul className="dropdown-menu dropdown-gridsize">
        <DropDownItems
          row={5}
          col={10}
          onClickGridSize={props.onClickGridSize}
        />
        <DropDownItems
          row={10}
          col={10}
          onClickGridSize={props.onClickGridSize}
        />
        <DropDownItems
          row={20}
          col={20}
          onClickGridSize={props.onClickGridSize}
        />
        <DropDownItems
          row={20}
          col={40}
          onClickGridSize={props.onClickGridSize}
        />
        <DropDownItems
          row={20}
          col={50}
          onClickGridSize={props.onClickGridSize}
        />
        <DropDownItems
          row={25}
          col={60}
          onClickGridSize={props.onClickGridSize}
        />
        <DropDownItems
          row={25}
          col={70}
          onClickGridSize={props.onClickGridSize}
        />
      </ul>
    </li>
  );
}

export default GridSize;
