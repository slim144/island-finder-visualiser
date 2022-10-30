import React from "react";

function GridSizeItems(props) {
  const { row, col } = props;
  function handleClick(event) {
    props.onClickGridSize(row, col);
    event.preventDefault();
  }

  return (
    <li>
      <a className="dropdown-item enabled-link" href="/" onClick={handleClick}>
        {row} x {col}
      </a>
    </li>
  );
}

export default GridSizeItems;
