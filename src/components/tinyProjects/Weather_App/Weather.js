import React from "react";

const Weather = (props) => {
  // Creating Ui of final Weather data
  return (
    <div>
      <p> city : {props.data.city} </p>
      <p> Country : {props.data.country} </p>
      <p> Humidity : {props.data.humidity} </p>
      <p> longitudnal coordinates : {props.data.lonCoordinates} </p>
      <p> latitudnal coordinates : {props.data.lanCoordinates} </p>
      <p> temprature: {props.data.temprature} </p>
    </div>
  );
};

export default Weather;
