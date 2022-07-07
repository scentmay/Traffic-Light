import React from "react";

//create your first component
const TrafficLight = () => {
	return (
    <div>
      <div className="main-container">
        <div className="upperZone"></div>
        <div className="trafficLight">
          <div className="redLight"></div>
          <div className="yellowLight"></div>
          <div className="greenLight"></div>
        </div>
      </div>
    </div>
	);
};

export default TrafficLight;


