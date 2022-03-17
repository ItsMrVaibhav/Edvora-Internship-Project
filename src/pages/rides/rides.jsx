import React from "react";
import RideCard from "../../components/ride-card/ride-card";

class Rides extends React.Component {
  render() {
    return (
      <div className="rides">
        {
          this.props.rides.map((ride, index) => {
            return !ride.hidden ? <RideCard ride={ride} key={index} /> : undefined;
          })
        }
      </div>
    );
  }
}

export default Rides;