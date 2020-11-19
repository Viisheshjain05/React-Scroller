import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import Api_Key from "./manifest.json";

const WeatherApp = () => {
  const [WeatherData, setWeatherData] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const Url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key.ApiKey}&units=metric`);
    const data = await Url.json();

    console.log("data", data);

    // Get Data and store into State
    setWeatherData({
      lonCoordinates: data.coord.lon,
      lanCoordinates: data.coord.lan,
      temprature: data.main.temp,
      humidity: data.main.humidity,
      city: data.name,
      country: data.sys.country,
    });
  };
  // fetchData();
  console.log("WeatherData", WeatherData);
  return (
    <div>
      <Form fetchData={fetchData} />
      <Weather data={WeatherData} />
    </div>
  );
};

export default WeatherApp;
