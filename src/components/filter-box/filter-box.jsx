import React from "react";
import "./filter-box.css";

class FilterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "State",
      city: "City"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({[name]: value}, () => {
      this.props.onFilterChange(this.state.state, this.state.city);
    });
  }

  render() {
    const { states, cities } = this.props;
    return (
      <div className="filter-box">
        <p>Filters</p>
        <select name="state" id="state" className="filter-dropdown" onChange={this.handleChange}>
          <option value="State" key={0}>State</option>
          {
            states.map((s, i) => <option key={i + 1} value={s}>{s}</option>)
          }
        </select>
        <select name="city" id="city" className="filter-dropdown" onChange={this.handleChange}>
          <option value="City" key={0}>City</option>
          {
            cities.map((c, i) => <option key={i + 1} value={c}>{c}</option>)
          }
        </select>
      </div>
    );
  }
}

export default FilterBox;