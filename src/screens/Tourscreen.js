import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import moment from "moment";

import Tour from "../components/Tour";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "./mytour.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

const { RangePicker } = DatePicker;

function Tourscreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tours, setTours] = useState([]);

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [duplicateTours, setDuplicateTours] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        setError("");
        setLoading(true);
        const data = (
          await axios.get(
            "https://wondertour.onrender.com/api/tours/getalltours"
          )
        ).data;
        //console.log(data);
        setTours(data);
        setDuplicateTours(data);
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
      setFromDate(moment(dates[0]).format("DD-MM-YYYY"));
      setToDate(moment(dates[1]).format("DD-MM-YYYY"));

      var tempTours = [];
      for (const tour of duplicateTours) {
        var availability = true;
        if (tour.currentbookings.length > 0) {
          for (const booking of tour.currentbookings) {
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
        if (availability == true || tour.currentbookings.length == 0) {
          tempTours.push(tour);
        }
      }
      setTours(tempTours);
    } catch (error) {}
  }

  function filterBySearch() {
    const tempTours = duplicateTours.filter((x) =>
      x.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setTours(tempTours);
  }

  return (
    <div>
      <div className="tour--header">
        <h2 className="tour--title">
          We Provide You With the Smart Tour Destinations{" "}
        </h2>
        {/* <button className="tour--reomendations">View Planned Tours</button> */}
      </div>
      <div className="tour--widget">
        {/* <div className="widget-one">
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div> */}

        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search Tours"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            onKeyUp={filterBySearch}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader></Loader>
        ) : error.length > 0 ? (
          <Error msg={error}></Error>
        ) : (
          tours.map((x) => {
            return (
              <div className="tour-row" data-aos="flip-down">
                <Tour tour={x} fromDate={fromDate} toDate={toDate} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Tourscreen;
