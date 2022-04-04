import React from "react";

function Filter({ greased, onChangeSetGreased, sortBy, onChangeSetSortBy }) {
  function handleGreaseClick() {
    onChangeSetGreased((greased) => !greased);
  }

  function handleSortClick (event) {
      onChangeSetSortBy(event.target.value)
  }

  return (
    <div>
      <button className="filter-greased" onClick={handleGreaseClick}>
        {greased ? "Find Ungreased Pigs" : "Find Greased Pigs"}
      </button>
      <select name="sort" value={sortBy} onChange={handleSortClick}>
          <option value="weight">Weight
          </option>
          <option value="name">Name
          </option>
      </select>
    </div>
  );
}

export default Filter;
