import React, {useState} from "react";

//create your first component
const TrafficLight = () => {
	
  const [ color, setColor] = useState("red");
     
  return (
    <div>
      <div className="main-container">
        <div className="upperZone"></div>
        <div className="trafficLight">

          <div id="redLight" onClick={() => {
            const redLight = document.getElementById("redLight");
            redLight.classList.add("glow");
            yellowLight.classList.remove("glow");
            greenLight.classList.remove("glow");
          }}></div>

          <div id="yellowLight" onClick={() => {
            const yellowLight = document.getElementById("yellowLight");
            redLight.classList.remove("glow");
            yellowLight.classList.add("glow");
            greenLight.classList.remove("glow");
          }}></div>

          <div id="greenLight" onClick={() => {
            const greenLight = document.getElementById("greenLight");
            redLight.classList.remove("glow");
            yellowLight.classList.remove("glow");
            greenLight.classList.add("glow");
          }}></div>
          
        </div>
      </div>
    </div>
	);
};

export default TrafficLight;


