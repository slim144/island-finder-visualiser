import React from "react";
import DropDownItems from "./SearchPointItems";

function SearchPoint(props) {
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
        Search Point
      </a>
      <ul className="dropdown-menu dropdown-searchpoint">
        <DropDownItems
          searchName="Top Left"
          rowSearch={0}
          colSearch={0}
          onClickSearchPoint={props.onClickSearchPoint}
        />
        <DropDownItems
          searchName="Top Right"
          rowSearch={0}
          colSearch={props.col - 1}
          onClickSearchPoint={props.onClickSearchPoint}
        />
        <DropDownItems
          searchName="Middle"
          rowSearch={Math.floor(props.row / 2)}
          colSearch={Math.floor(props.col / 2)}
          onClickSearchPoint={props.onClickSearchPoint}
        />
        <DropDownItems
          searchName="Bottom Left"
          rowSearch={props.row - 1}
          colSearch={0}
          onClickSearchPoint={props.onClickSearchPoint}
        />
        <DropDownItems
          searchName="Bottom Right"
          rowSearch={props.row - 1}
          colSearch={props.col - 1}
          onClickSearchPoint={props.onClickSearchPoint}
        />
      </ul>
    </li>
  );
}

export default SearchPoint;
