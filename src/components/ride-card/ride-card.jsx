import "./ride-card.css";
import React from 'react';

const RideCard = ({ride}) => {
  return (
    <div className="ride">
      <img src={ride.map_url} alt={ride.id} className="ride-map" />
      <div className="ride-details">
        <div className="ride-details-one">
          <p className="ride-detail-one">Ride ID - <span>{ride.id}</span></p>
          <p className="ride-detail-one">Origin Station - <span>{ride.origin_station_code}</span></p>
          <p className="ride-detail-one">Station Path - <span>{ride.station_path.join(" > ")}</span></p>
          <p className="ride-detail-one">Date - <span>{ride.date}</span></p>
          <p className="ride-detail-one">Distance - <span>{ride.distance}</span></p>
        </div>
        <div className="ride-details-two">
          <p className="ride-detail-two">{ride.city}</p>
          <p className="ride-detail-two">{ride.state}</p>
        </div>
      </div>
    </div>
  );
}

export default RideCard;