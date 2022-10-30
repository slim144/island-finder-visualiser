import React from "react";
import Legends from "./BodyLegends";

function Header(props) {
  return (
    <div className="body-content">
      <Legends />

      {props.searchState === "START" ? (
        <h1>Welcome to Island Finder</h1>
      ) : (
        <h1>
          Island Count: <b>{props.countIsland}</b>{" "}
        </h1>
      )}

      <div className="grid-description">
        <p>
          Grid Size:{" "}
          <b>
            {props.row} x {props.col}
          </b>
        </p>
        <p>
          Search Point: <b>{props.searchName}</b>
        </p>
      </div>
    </div>
  );
}

export default Header;
