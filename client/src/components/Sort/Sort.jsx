import React from "react";
import "./Sort.css";

function Sort(props) {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <form className="sort-container">
      <label htmlFor="sort">Sort By:</label>
      <select name="Sort" id="sort" onChange={handleChange}>
        <option value="" className="no-sort">
          ------
        </option>
        <option value="title-ascending">Title A-Z</option>
        <option value="title-descending">Title Z-A</option>
        <option value="author-ascending">Author A-Z</option>
        <option value="author-descending">Author Z-A</option>
      </select>
    </form>
  );
}

export default Sort;
