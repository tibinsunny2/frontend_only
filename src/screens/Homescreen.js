import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import moment from "moment";
import "./home.css";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

const { RangePicker } = DatePicker;

function Homescreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rooms, setRooms] = useState([]);

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [type, setType] = useState("all");

  useEffect(() => {
    async function fetchMyAPI() {
     
      try {
        setError("");
        setLoading(true);
        const data = (
          await axios.get(
            "http://127.0.0.1:8000/get-safety-info/"
          )
        ).data;
        console.log(data);
        setRooms(data);
        setDuplicateRooms(data.name);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }
    fetchMyAPI();
  }, []);

  function filterByDate(dates) {
    // console.log(moment(dates[0]).format("DD-MM-YYYY"));
    // console.log(moment(dates[1]).format("DD-MM-YYYY"));
    try {


      var tempRooms = [];
      for (const room of duplicateRooms) {
        var availability = false;
        if (room.currentbookings.length > 0) {
          for (const booking of room.currentbookings) {
            if (
              !moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
                booking.fromdate,
                booking.todate
              ) &&
              !moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
                booking.fromdate,
                booking.todate
              )
            ) {
              if (
                moment(dates[0]).format("DD-MM-YYYY") !== booking.fromdate &&
                moment(dates[0]).format("DD-MM-YYYY") !== booking.todate &&
                moment(dates[1]).format("DD-MM-YYYY") !== booking.fromdate &&
                moment(dates[1]).format("DD-MM-YYYY") !== booking.todate
              ) {
                availability = true;
              }
            }
          }
        }
        //
        if (availability == true || room.currentbookings.length == 0) {
          tempRooms.push(room);
        }
      }
      setRooms(tempRooms);
    } catch (error) {}
  }

  function filterBySearch() {
   fetch()
  }

  return (
    <>
      <div className="hotel--header">
        <h2 className="hotel-title">Ensure that your favourite  places are the most safest place too</h2>
        <p className="hotel--description">
         
      The informations are provided here ..is based on the live updates
        </p>
      </div>
      

      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader></Loader>
        ) : error.length > 0 ? (
          <Error msg={error}></Error>
        ) : (
          Object.keys(rooms.country_safety_info.data).map((x) => {
            console.log(rooms.country_safety_info.data[x])
            return (
              <div className="hotel--row" data-aos="flip-down">
                <Room key={x}room={rooms.country_safety_info.data[x]} fromDate={fromDate} toDate={toDate} />
              </div>
            );
          })
        )}
      </div>
  </>
  );
}

export default Homescreen;
