import React, { useState } from "react";
import "./emergency.css";
import axios from "axios";
import Map from "../map/Map";
function Emergency() {
  const [URL, setURL] = useState({});
  const [Data, setData] = useState({ keys: "123" });
  const [Datas, setDatas] = useState({});
  const handlechange = (e) => {
    setURL(e.target.value);
    console.log(URL);
  };
const refreshs=()=>{
  window.location.reload()
}

  const handlesubmit = () => {
    const { params } = URL;
    localStorage.setItem("location",URL)
    // axios
    //   .post("emergency_services/", {
    //     place_name: URL,
    //   })
    fetch("emergency_services/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        place_name: URL,
      }),
    })
      .then((res) => res.json()
      
      )
      .then((data) => {
        setDatas(data);
      }).catch(()=>{
        alert("check your spelling / give valid data")
      })
  };
  return (
    <div className="ememrgencyconatiner">
      <div className="ewrapper">
        <div className="em1firstbox">
          <Map />
        </div>
        <div className="emsecondbox">
          <div className="emainbox1">
            <div className="em1subfirstbox">
              <div className="emsearchbox">
                <input
                  onChange={handlechange}
                  name="params"
                  placeholder="enter your city name.."
                  type="text"
                />
                <button onClick={handlesubmit}>Search</button>
                <button onClick={refreshs}>Map</button>
              </div>
            </div>
            <div className="emsubsecondbox">
              {Object.keys(Datas).map((item) => {
                return Object.keys(Datas[item]).map((items) => {
                  return Object.keys(Datas[item][items]).map((w) => {
                    const data = Datas[item][items][w];
                    return data !== undefined && data !== null ? (
                      <div className="detailbox" key={w}>
                        {}
                        <div className="dname">
                          {typeof data.name !== "undefined" &&
                          data.name !== "null"
                            ? data.name
                            : ""}
                        </div>
                        <div className="dname">
                          {" "}
                          {typeof data.name !== "undefined" &&
                          data.name !== "null"
                            ? data.country
                            : ""}
                        </div>
                        <div className="dname">
                          {" "}
                          {typeof data.road !== "undefined" &&
                          data.name !== "null"
                            ? data.road
                            : ""}
                        </div>
                        <div className="dname">
                          {" "}
                          {typeof data.name !== "undefined" &&
                          data.name !== "null"
                            ? data.state
                            : ""}
                        </div>
                        <div className="dname">
                          {" "}
                          {typeof data.name !== "undefined" &&
                          data.name !== "null"
                            ? <div> Contact: 8921345678</div>
                            : ""}
                        </div>
                        <div className="dname">
                          {" "}
                          {typeof data.name !== "undefined" &&
                          data.name !== "null"
                            ? data.postcode
                            : ""}
                        </div>
                      
                      </div>
                    ) : (
                      <div className="dname">enter your place</div>
                    );
                  });
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergency;
