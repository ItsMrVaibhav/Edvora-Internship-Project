import "./filter.css";
import React from "react";
import { useState } from "react";
import filterImage from "./filter.png";
import FilterBox from "../filter-box/filter-box";

const Filter = ({states, cities}) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="filter">
      <img src={filterImage} alt="Filter" className="filter-icon" />
      <p className="filter-title" onClick={() => setToggle(!toggle)}>Filter</p>
      {
        toggle
        ? <FilterBox />
        : undefined
      }
    </div>
  );
}

export default Filter;