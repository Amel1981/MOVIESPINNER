import React from "react";

const NameFilter = ({ value = "", onChange = () => {} }) => (
  <div className="name-filter">
    <input
      className="name-filter-text"
      type="text"
      placeholder="Search Here"
      value={value}
      onChange={event => {
        onChange(event.target.value);
      }}
    />
  </div>
);

export default NameFilter;
