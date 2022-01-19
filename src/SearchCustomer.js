import React from "react";

const SearchCustomer = (props) => {
  const { term, searchHandle } = props;
  return (
    <div>
      <input
        type="text"
        value={term}
        placeholder="search by name or phone"
        onChange={searchHandle}
        className="form-control"
      />
    </div>
  );
};
export default SearchCustomer;