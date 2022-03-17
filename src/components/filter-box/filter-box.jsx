import React from "react";
import "./filter-box.css";

class FilterBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter-box">
        <p>Filters</p>
        <select name="state" id="state" className="filter-dropdown">
          <option value="">State</option>
        </select>
        <select name="city" id="city" className="filter-dropdown">
          <option value="">City</option>
        </select>
      </div>
    );
  }
}

export default FilterBox;