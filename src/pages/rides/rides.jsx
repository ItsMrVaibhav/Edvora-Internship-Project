import "./rides.css";
import React from "react";
import RideCard from "../../components/ride-card/ride-card";

class Rides extends React.Component {
  render() {
    return (
      <div className="rides">
        {
          this.props.count > 0 
          ? (this.props.rides.map((ride, index) => {
              return !ride.hidden ? <RideCard ride={ride} key={index} /> : undefined;
            }))
          : <p className="rides-error">No Rides Found 🙁</p>
        }
      </div>
    );
  }
}

export default Rides;