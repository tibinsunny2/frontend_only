import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import "./register.css";

function RegisterScreen() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [image, setRegImage] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [place, setPlace] = useState("");
  const [id, setId] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");

  async function register() {
    const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const regPass = /(?=.*[0-9])/g;
    if (!regExp.test(email)) {
      alert("email not valid");
    } else if (!regPass.test(password)) {
      alert("password not valid");
    } else if (password === password_confirmation) {
      // const user = {

      // };

      //console.log(user);
      setLoading(true);
      setError("");
      setSuccess("");

      try {
        const result = fetch("admin-register/", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("adminkey")}`,
          },
          body: JSON.stringify({
            username,
            email,
            phone,
            place,
            password,
            password_confirmation,
          }),
        })
          .then((res) => res.json())
          .then((datas) => {
            console.log(datas.message);
            if (datas) {
              try {
                localStorage.setItem("name", datas.username);
                localStorage.setItem("email", datas.email);
                localStorage.setItem("number", datas.phone);
                localStorage.setItem("place", datas.place);
                alert(data.message);
                True();
              } catch {
                alert("user registration failed");
              }
              Object.keys(datas).map((item) => {
                alert(datas[item]);
                window.location.href = "/login";
              });
            }
            if (datas.errors) {
              Object.keys(datas.errors).map((item) => {
                alert("give valid..." + item);
              });
            } else {
              console.log(datas);
              if (datas.detail) {
                alert(datas.detail);
              }
            }
          });
        setSuccess(result);
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
      } catch (error) {
        console.log("please login...");
      }
      setLoading(false);
    } else {
      alert("password not match");
    }
  }

  return (
    <div className="register">
      {/* <img src={Register} alt="register image" className="register--img" /> */}
      {loading && <Loader></Loader>}
      {error.length > 0 && <Error msg={error}></Error>}

      <div className="row justify-content-center ">
        <div className="col-md-5 mt-5">
          {success.length > 0 && <Success msg={success}></Success>}
          <div className="bs">
            <h2 style={{ textDecoration: "underline" }}>
              Give them power with care
            </h2>
            <form enctype="multipart/form-data">
              <input
                type="text"
                className="form-control"
                placeholder="enter username"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                  console.log(e.target.value);
                }}
                style={{
                  padding: "20px",
                  border: "none",
                  marginBottom: "20px",
                }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Phonenumber"
                value={phone}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  console.log(e.target.value);
                }}
                style={{
                  padding: "20px",
                  border: "none",
                  marginBottom: "20px",
                }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              {/* <input
                type="file"
                className="form-control"
                placeholder="select your Image"
                required
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  console.log(selectedFile);
                  setRegImage(selectedFile);
                }}
                style={{ padding: "20px" }}
              /> */}
              <input
                type="text"
                className="form-control"
                placeholder="Enter your place"
                required
                value={place}
                onChange={(e) => {
                  const value = e.target.value;

                  setPlace(e.target.value);
                  console.log(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
                value={password_confirmation}
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                  console.log(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
            </form>

            {loading ? (
              <div>Registering... Please Wait...</div>
            ) : (
              <button className=" register--btn" onClick={register}>
                Register
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
