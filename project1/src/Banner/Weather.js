import React from "react";

import { useState } from "react";

import { useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState({});

  //  let url =
  //    "https://api.thingspeak.com/channels/2062988/fields/1/last.json?api_key=Z8MFPN6J2WSDXE6J";

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=d2f04dc6cb9f0a027bbd4b02b01df0ca"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("exec");
        setWeather(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("Err");
        console.log(err);
      });
  });

  return (
    <div>
      <h1>weather details</h1>

      <h1>{/*weather.main.temp_min */}</h1>
    </div>
  );
}

export default Weather;
