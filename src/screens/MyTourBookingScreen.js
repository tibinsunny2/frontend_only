import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Tag } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";
import "./mytour.css";
function MyTourBookingScreen() {
  const [tourbookings, settourBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  async function fetchMyAPI() {
    setError("");
    setLoading(true);
    try {
      const data = (
        await axios.post(
          "https://wondertour.onrender.com/api/tourbookings/getbookingbyuserid",
          {
            userid: user._id,
          }
        )
      ).data;
      settourBookings(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  async function cancelBooking(bookingid, tourid) {
    setError("");
    setLoading(true);
    try {
      const data = (
        await axios.post(
          "https://wondertour.onrender.com/api/tourbookings/cancelbooking",
          {
            bookingid,
            tourid,
          }
        )
      ).data;
      setLoading(false);
      Swal.fire(
        "Congratulations",
        "Your Tour Cancelled Successfully",
        "success"
      ).then((result) => {
        fetchMyAPI();
      });
    } catch (error) {
      console.log(error);
      //setError(error);
      Swal.fire("Opps", "Error:" + error, "error");
    }
    setLoading(false);
  }

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "80%",
              marginLeft: "15%",
            }}
          >
            {tourbookings &&
              tourbookings.map((booking) => {
                return (
                  <div
                    style={{
                      width: "25%",
                      border: "1px solid #eee",
                      padding: "25px",
                      margin: "15px",
                      borderRadius: "4px",
                    }}
                  >
                    <h1
                      style={{
                        color: "#0688b7",
                        marginBottom: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {booking.tour}
                    </h1>
                    <p>
                      <b>BookingId:</b> {booking._id}
                    </p>
                    <p>
                      <b>CheckIn:</b> {booking.fromdate}
                    </p>
                    <p>
                      <b>CheckOut:</b> {booking.todate}
                    </p>
                    <p>
                      <b>Amount:</b> {booking.totalamount}
                    </p>
                    <p>
                      <b>Status:</b>{" "}
                      {booking.status === "booked" ? (
                        <Tag color="green">CONFIRMED</Tag>
                      ) : (
                        <Tag color="red">CANCELLED</Tag>
                      )}
                    </p>
                    {booking.status === "booked" && (
                      <div className="text-right">
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            cancelBooking(booking._id, booking.tourid);
                          }}
                        >
                          Cancel Booking
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyTourBookingScreen;
