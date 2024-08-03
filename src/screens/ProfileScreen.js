import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Tag } from "antd";
// import Profile from "../images/Profile.svg";
import MyBookingScreen from "./MyBookingScreen";
import MyTourBookingScreen from "./MyTourBookingScreen";
import axios from "axios";

const { TabPane } = Tabs;

function ProfileScreen() {

  const [userDetails, setUserDetails] = useState([]);

  const fetchData = async () => {
    const data = await axios.get("user-details/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("key")}`,
      }
    })
    console.log(data);
    setUserDetails(data.data)
  }


  const [Admin, setAdmin] = useState('')
  const [User, setUser] = useState('')
  const [Number, setNumber] = useState('')
  const [Place, setPlace] = useState('')
  useEffect(() => {
    // if (!User) {
    //   window.location.href = "/login";
    //  }
    fetchData()
    setUser(localStorage.getItem("name"))
    setAdmin(localStorage.getItem('email'))
    setNumber(localStorage.getItem('number'))
    setPlace(localStorage.getItem('place'))

  }, []);
  console.log(Admin)
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="ml-3 mt-3">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Profile" key="1">
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-xs-12 ml-5 mb-5">
              <div
                style={{
                  border: "1px solid #eee",
                  padding: "40px",
                  backgroundColor: "#6C63FF",
                  color: "#eee",
                  borderRadius: "4px",
                }}
              >
                <p style={{ letterSpacing: "2px", fontSize: "32px" }}>
                  <b>User Profile</b>
                </p>
                <p>Name : {userDetails.username}</p>
                <p>Email : {userDetails.email}</p>
                <p>place : {userDetails.place}</p>
                <p>Phone number: {userDetails.phone}</p>
              </div>
            </div>
            {/* <img src={Profile} alt="Profile" /> */}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ProfileScreen;
