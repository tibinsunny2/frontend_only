import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./weather.css";
function Weather() {
  const [cityName, setCity] = useState({});
  const [Data, setData] = useState();
  const submit = async () => {
    console.log(cityName);
    if(cityName.cityname){
      await fetch(`weather/${cityName.cityname}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
       if(data.message){
        setData(undefined)
        alert("give valid city name")
       }else{
         setData(data);
       }
       
      })
      .catch((error) => {
        setData(undefined)
        alert("Check your spelling");
      });
    }else{
      setData(undefined)
      alert("enter your place name")
    }
    
  };
  const handlechange = (e) => {
    e.preventDefault();
    setCity({
      ...cityName,
      [e.target.name]: e.target.value,
    });
    console.log(cityName);
  };

  return (
    <body class="sunny">
      <div id="kurish" class="container text-center vcenter">
        <div className="focus">
          <input
            placeholder="enter city name"
            onChange={handlechange}
            value={cityName.city}
            name="cityname"
          />
          <button id="submit" onClick={submit}>
            Submit
          </button>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-6 text-left">
                <h3 id="city">
                  <i class="fa fa-map-marker"></i>&nbsp;&nbsp;
                  <span>
                    {Data !== undefined
                      ? Data.weather.city
                      : "Enter your Location"}
                  </span>
                </h3>
              </div>
            </div>
            <hr />
            <div id="display">
              <div class="row">
                <div class="col-md-6" id="">
                  <div id="">
                    <h4
                      style={{
                        fontFamily: "serif",
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      ITEMS TO CARRIE
                    </h4>
                    <div>
                      {Data !== undefined
                        ? Data.necessary_items.map((item) => {
                            console.log(item);
                            return (
                              <div style={{ color: "white" }} key={item}>
                                {item}
                              </div>
                            );
                          })
                        : "Enter your Location"}
                    </div>
                  </div>
                </div>
                <div class="col-md-6" id="temperature">
                  <h4>Today</h4>

                  <p>
                    <span id="temp">
                      {Data !== undefined ? Data.weather.temperature : "0"}
                    </span>
                    <sup>
                      &deg;<span id="metric">F</span>
                    </sup>
                  </p>
                  <h5>
                    High:{" "}
                    <span
                      id="temp-max"
                      style={{
                        fontFamily: "serif",
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      26
                    </span>{" "}
                    / Low:{" "}
                    <span
                      id="temp-min"
                      style={{
                        fontFamily: "serif",
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      12
                    </span>
                  </h5>
                </div>
              </div>
            </div>
            <hr id="hr-bottom" />
            <div class="row" id="weather-condition">
              <div class="col-md-2 col-md-offset-1">
                <p>
                  <i
                    class="wi wi-cloud"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    about the day
                  </i>
                </p>
                <p
                  id="condition"
                  style={{
                    fontFamily: "serif",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  {" "}
                  {Data !== undefined ? Data.weather.description : "nothing"}
                </p>
              </div>
              <div class="col-md-2">
                <p>
                  <i
                    class="wi wi-humidity"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    polution rate
                  </i>
                </p>
                <p
                  id="humidity"
                  style={{
                    fontFamily: "serif",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  {" "}
                  {Data !== undefined ? "10%" : "0"}
                </p>
              </div>
              <div class="col-md-2">
                <p>
                  <i
                    class="wi wi-strong-wind"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    windy
                  </i>
                </p>
                <p
                  id="wind"
                  style={{
                    fontFamily: "serif",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  {" "}
                  {Data !== undefined ? "20 NE" : "0"}
                </p>
              </div>
              <div class="col-md-2">
                <p>
                  <i
                    class="wi wi-barometer"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    Humidity
                  </i>
                </p>
                <p
                  id="hpa"
                  style={{
                    fontFamily: "serif",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  {Data !== undefined ? Data.weather.humidity : "0"}
                </p>
              </div>
              <div class="col-md-2">
                <p>
                  <i
                    class="wi wi-showers"
                    style={{
                      fontFamily: "serif",
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    rain chance
                  </i>
                </p>
                <p
                  id="prec"
                  style={{
                    fontFamily: "serif",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  {" "}
                  {Data !== undefined ? "10%" : "0"}
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <footer id="footer">
          <p></p>
        </footer>
      </div>
    </body>
  );
}

export default Weather;
