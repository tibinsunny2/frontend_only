import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Tag } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";

function MyBookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const user = JSON.parse(localStorage.getItem("currentUser"));

  // async function fetchMyAPI() {
  //   setError("");
  //   setLoading(true);
  //   try {
  //     const data = (
  //       await axios.post(
  //         "https://wondertour.onrender.com/api/bookings/getbookingbyuserid",
  //         {
  //           userid: user._id,
  //         }
  //       )
  //     ).data;
  //     setBookings(data);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error);
  //   }
  //   setLoading(false);
  // }

 

  // async function cancelBooking(bookingid, roomid) {
  //   setError("");
  //   setLoading(true);
  //   try {
  //     const data = (
  //       await axios.post(
  //         "https://wondertour.onrender.com/api/bookings/cancelbooking",
  //         {
  //           bookingid,
  //           roomid,
  //         }
  //       )
  //     ).data;
  //     setLoading(false);
  //     Swal.fire(
  //       "Congratulations",
  //       "Your Room Cancelled Successfully",
  //       "success"
  //     ).then((result) => {
  //       fetchMyAPI();
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     //setError(error);
  //     Swal.fire("Opps", "Error:" + error, "error");
  //   }
  //   setLoading(false);
  // }

  return (
    <div>
 
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "80%",
              marginLeft: "15%",
            }}
          >
            {bookings &&
              bookings.map((booking) => {
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
                    <h1 style={{ color: "#0688b7", marginBottom: "30px" }}>
                      {booking.room}
                    </h1>
                    <p>
                      <b>Booking Id:</b> {booking._id}
                    </p>
                    <p>
                      <b>Check In:</b> {booking.fromdate}
                    </p>
                    <p>
                      <b>Check Out:</b> {booking.todate}
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
                            // cancelBooking(booking._id, booking.roomid);
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

    </div>
  );
}

export default MyBookingScreen;
