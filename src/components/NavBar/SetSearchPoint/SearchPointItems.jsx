import React from "react";

function SearchPointItems(props) {
  const { rowSearch, colSearch, searchName } = props;

  function handleClick(event) {
    props.onClickSearchPoint(rowSearch, colSearch, searchName);
    event.preventDefault();
  }

  return (
    <li>
      <a className="dropdown-item enabled-link" href="/" onClick={handleClick}>
        {props.searchName}
      </a>
    </li>
  );
}

export default SearchPointItems;
