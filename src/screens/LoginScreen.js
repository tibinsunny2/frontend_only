


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import "./login.css";
import { Link } from "react-router-dom";
// import Loginimg from "../images/Login.svg";
function LoginScreen() {

  const [FormData, setFormData] = useState({

  });
const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
const handlechange=(e)=>{
  setFormData({
    ...FormData,
    [e.target.name]:e.target.value
  })
}
const Login=async(e)=>{
const {username,password}=FormData

await axios.post('admin-login/',{
  username,
  password
}).then((res)=>{
  if(res.status===200){
    console.log(res.status)
    if(res.status==200){
      localStorage.setItem('adminkey',res.data.access)
      localStorage.setItem('isadmin',res.data.is_superuser)
      alert("admin login successfull..welcome..."+res.data.username)
navigate('/admindashbord')
    }
    else{
      alert("detected unautherized entry...")
    }
    setLoading(false);
  }
  
}).catch(()=>{
  alert("detected unauthorized entry..")
  })
} 
  
  return (
    <div className="login--screen">
      {/* <img src={Loginimg} alt="login img" className="login--img" /> */}
      {loading && <Loader></Loader>}

      <div className="row justify-content-center">
        <div className="col-md-5 mt-5">
          {error.length > 0 && <Error msg={error}></Error>}
          <div className="bs">
            <h2>Admin...Login</h2>

            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter username...."
              onChange={handlechange}
              style={{
                textAlign: "center",
                padding: "20px",
                marginBottom: "20px",
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="enter Password...."
              name="password"
              onChange={handlechange}
              style={{
                textAlign: "center",
                padding: "20px",
                marginBottom: "20px",
              }}
            />
            {loading ? (
              <div>Login...Please Wait...</div>
            ) : (
              <button className="login--btn" onClick={Login}>
                Login
              </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
