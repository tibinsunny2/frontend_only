import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const location = useLocation();
  const isLogin = location.pathname === "/";

  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  console.log(user)
  const [Key, setKey] = useState({});
  
  useEffect(() => {
    setKey(localStorage.getItem("key"));
  }, []);

  const Remove = () => {
    localStorage.clear();
    // window.location.reload();
    navigate("/");
  };
  const change=()=>{
    navigate('/cart')
    }
  const navAction = () => {
    if (user) {
      return (
        <ul className="navbar-nav mr-5">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user mr-2"></i>
              {user}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {/* <Link className="dropdown-item" to="/destinations">
                Destinations
              </Link> */}
              {/* <Link className="dropdown-item" to="/hotel">
                Hotels
              </Link> */}
              {/* <Link className="dropdown-item" to="/product">
                Travel Packages
              </Link> */}
              <div
                className="dropdown-item px-4"
                style={{
                  backgroundColor: "lightcoral",
                  width: "fit-content",
                  padding: "10px",
                  marginLeft: "30px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
                to="#"
                onClick={Remove}
              >
                Logout
              </div>
           
            </div>
          </div>
        </ul>
      );
    }

    if (user) {
      return (
        <ul className="navbar-nav">
          {/* <li className="nav-item active">
        <Link className="nav-link" to="/tour">
          Destinations
        </Link>
      </li> */}

          <li className="nav-item active">
            <Link className="nav-link" to="/admindash">
              Gadgets
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/guides"></Link>
          </li>
          <li className="nav-item active">
            {/* <Link className="nav-link" to="/product">
              Travel Packages
            </Link> */}
          </li>
          {/* <li className="nav-item active">
        <Link className="nav-link" to="/hotel">
         Global safety
        </Link>
      </li> */}

          <li
            className="nav-item active"
            style={{
              backgroundColor: "red",
              width: "fit-content",
              padding: "3px",
              borderRadius: "30px",
            }}
            onClick={Remove}
          >
            <div className={!Key ? "hidden" : "nav-link"} onClick={Remove}>
              Logout
            </div>
          </li>
        </ul>
      );
    }
  };

  if (user) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <Link
            className="navbar-brand"
            to="/home"
            style={{
              fontStyle: "italic",
              fontFamily: "georgia",
              marginLeft: "10px",
              fontSize: "26px",
            }}
          >
            <span style={{ color: "#0688b7", fontWeight: "bold" }}>V</span>
            entureVista
          </Link>
          <div className="text-light navText">
            <Link className="text-light" to="/profile">
              <p>Profile</p>
            </Link>
            <Link className="text-light" to="/login">
              <p>Admin</p>
            </Link>
            <Link className="text-light" to="/product">
              <p>Packages</p>
            </Link>
            <Link className="text-light" to="/admindash">
              <p>Gadgets</p>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i class="fas fa-bars" style={{ color: "black" }}></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {navAction()}
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg d-flex justify-content-between ">
        <Link
          className="navbar-brand"
          to={isLogin ? "/" : "/admindashbord"}
          style={{
            fontStyle: "italic",
            fontFamily: "georgia",
            marginLeft: "10px",
            fontSize: "26px",
          }}
        >
          <span style={{ color: "#0688b7", fontWeight: "bold" }}>V</span>
          entureVista
        </Link>
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontStyle: "italic",
            fontFamily: "georgia",
            marginLeft: "10px",
            fontSize: "26px",
            color: "red",
            display: isLogin ? "none" : "",
          }}
        >
          Logout
        </Link>
      </nav>
    );
  }
}

export default Navbar;
