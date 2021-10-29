import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="f3 tc">
      <input
        type="search"
        className="pa3 ba b--gray"
        onChange={searchChange}
        placeholder="search"
      />
    </div>
  );
};
export default SearchBox;
