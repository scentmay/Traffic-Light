import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	
  const [ color, setColor] = useState("");
  
  return (
    <div>
      <div className="main-container">
        <div className="upperZone"></div>
        <div className="trafficLight">
          
          {/*Modificamos los valores de las clases de los div directamente con operadores ternarios. Al principio las clases están vacías*/}

          <div className={(color== "red") ? "glow" : ""} id="redLight" onClick={() => {
            setColor("red");
          }}></div>

          <div className={(color=="yellow" ? "glow" : "")} id="yellowLight" onClick={() => {
            setColor("yellow");
          }}></div>

          <div className={(color=="green" ? "glow" : "")} id="greenLight" onClick={() => {
            setColor("green");
          }}></div>

        </div>
      </div>
    </div>
	);
};

export default TrafficLight;


