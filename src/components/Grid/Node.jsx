import React from "react";

function Node(props) {
  const { isLand, animate, row, col, isSearchPoint, isVisited } = props.node;

  const nodeClassName = animate
    ? isLand
      ? "island-found"
      : "sea-found"
    : isLand
    ? "land"
    : "water";

  return (
    <td
      className={`node ${nodeClassName}${
        isSearchPoint && !isVisited ? " search-point" : ""
      }`}
      id={`node-${row}-${col}`}
      onMouseDown={() => props.onMouseDown(row, col)}
      onMouseEnter={() => props.onMouseEnter(row, col)}
      onMouseUp={() => props.onMouseUp(row, col)}
    ></td>
  );
}

export default Node;
