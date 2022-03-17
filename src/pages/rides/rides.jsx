import React from "react";
import RideCard from "../../components/ride-card/ride-card";

class Rides extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rides">
        {
          this.props.rides.map((ride, index) => {
            return <RideCard ride={ride} key={index} />;
          })
        }
      </div>
    );
  }
}

export default Rides;