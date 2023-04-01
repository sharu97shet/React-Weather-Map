import React from "react";

import { useState } from "react";

import { useEffect } from "react";

function Avenger() {
  const crickters = [
    {
      name: "kohli",
      ipl: "rcb",
    },
    {
      name: "rohit",
      ipl: "Mumbai",
    },
    {
      name: "pant",
      ipl: "delhi",
    },
  ];

  const [name, setname] = useState("sharath");

  const [city, setCity] = useState("bangalore");

  let [skills, technolgy] = useState({
    course: "javascrpt",
    skill: "sql",
  });

  //  setState()
  function changeName() {
    setname("RANJITHA");
    setCity("rajkot");
    technolgy({
      skill: "SalesFOrce",
    });

    fetch("https://jsonplaceholder.typicode.com/users").then(function (result) {
      //return result.text();  fetchdatajavascript

      console.log(result.text());
    });

    fetch("127.0.0.1:8000/api").then(function (result) {
      //return result.text();  fetchdatajavascript

      console.log(result);
    });

    fetch(
      "https://api.thingspeak.com/channels/2062988/fields/1/last.json?api_key=Z8MFPN6J2WSDXE6J"
    ).then(function (result) {
      //return result.text();  fetchdatajavascript

      console.log("abc is" + result.json());
    });

    fetch("localhost/balunand/worksheet/getuserdetails").then((res) =>
      console.log(res.json())
    );
  }

  return (
    <div>
      <div>
        <h1>
          {name} {city}
        </h1>

        <h1>{skills.skill}</h1>

        <button onClick={changeName}>changename</button>
      </div>

      <div class="parent">
        come
        {/* style={"margin-left: -761px;"}<div className="child1"></div>
        <div className="child2"></div> */}
      </div>

      <div class="child1">two</div>

      {useEffect(() => {
        console.log("component rendered /loaded");
      }, [name])}
    </div>
  );
}

export default Avenger;
