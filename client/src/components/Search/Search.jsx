import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <form className="search-container" onSubmit={(e) => props.onSubmit(e)}>
      <input
        type="text"
        className="searchbar"
        value={props.value}
        name="Search"
        onChange={(e) => props.onChange(e)}
        placeholder="Search by Author"
        autoFocus
      />
    </form>
  );
}

export default Search;
