import "./filter.css";
import React from "react";
import { useState } from "react";
import filterImage from "./filter.png";
import FilterBox from "../filter-box/filter-box";

const Filter = ({ states, cities, onFilterChange }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="filter">
      <img src={filterImage} alt="Filter" className="filter-icon" />
      <p className="filter-title" onClick={() => setShow(!show)}>Filter</p>
      <div className={`${show ? "" : "hide"}`}>
        <FilterBox states={states} cities={cities} onFilterChange={onFilterChange} />
      </div>
    </div>
  );
}

export default Filter;