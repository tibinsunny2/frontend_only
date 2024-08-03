import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../images/titan-master/titan-master/live/assets/css/style-rtl.css";
import "../images/titan-master/titan-master/live/assets/css/colors/default-rtl.css";
import "../images/titan-master/titan-master/live/assets/css/style.css";
import "./demo.css";
import axios from 'axios'
function Demo() {
  const [FormData, setFromData] = useState({});
  const [Key, setKey] = useState(true);
  const Datafill = (e) => {
    e.preventDefault();
    setFromData({
      ...FormData,
      [e.target.name]: e.target.value,
    });

    console.log(FormData);
  };
  const toggle = () => {
    setKey(false);
  };
  const navigate = useNavigate()




  const submit = async (e) => {
    e.preventDefault()
    const { username, password } = FormData;

    try {
      const res = await axios.post('user-login/', { username, password });

      if (res.status === 200) {
        console.log(res)
        if (!res.data.is_superuser) {
          localStorage.setItem('key', res.data.access);
          localStorage.setItem('user', res.data.username);
          localStorage.setItem('power', res.data.is_superuser);
          alert("Welcome Mr/Mrs..." + res.data.username);
          // window.location.reload();
          navigate('/home');

        } else {
          localStorage.setItem('adminkey', res.data.access)
          localStorage.setItem('power', res.data.is_superuser);
          localStorage.setItem('isadmin', res.data.is_superuser)
          alert("admin login successfull..welcome..." + res.data.username)
          console.log(res.data.is_superuser);
          navigate('/admindashboard');
          // window.location.reload();

        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Incorrect username or password");
      } else if (error.response && error.response.status === 404) {
        alert("User not found");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };




  const True = () => {
    setKey(true);
  };




  // register function

  const [Form2, setForm2] = useState({});

  const datafill2 = (e) => {
    setForm2({
      ...Form2,
      [e.target.name]: e.target.value,
    });

  };

  const submit2 = (e) => {
    e.preventDefault()
    const {
      username,
      email,
      phone,
      place,
      password,
      password_confirmation,
    } = Form2;

    fetch("/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        place,
        password,
        password_confirmation,
      }),
    }).then((res) => res.json()).then((data) => {
      console.log(data.data)
      if (data) {
        try {
          localStorage.setItem('name', data.data.username)
          localStorage.setItem('email', data.data.email)
          localStorage.setItem('number', data.data.phone)
          localStorage.setItem('place', data.data.place)
          alert(data.message)
          True();
        } catch {
          alert("user registration failed")
        }
      }
    })
  };

  return (
    <main>
      <div className="main">
        {/* <section className="module bg-dark-30">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h1
                  className="module-title font-alt mb-0"
                  style={{ fontFamily: "inherit", fontWeight: "700",color:"white" }}
                >
                  Login for opening your seemless traveling optionssdfsdffdfsdfsdfsdfsdfdffsdfsdfsdfsdfsdfd
                </h1>
              </div>
            </div>
          </div>
        </section> */}
        <section className="module">
          <div className="container" style={{ width: "60vw" }}>
            <div
              className="row"
              style={{
                backgroundColor: "gray",
                opacity: "70%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                borderRadius: "20px",
              }}
            >
              {Key == true ? (
                <div className="col-sm-5 col-sm-offset-1 mb-sm-40">
                  <h4
                    className="font-alt"
                    style={{
                      fontFamily: "inherit",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    Login
                  </h4>
                  <hr className="divider-w mb-10" />
                  <form className="form">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="username"
                        type="text"
                        name="username"
                        onChange={Datafill}
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="password"
                        type="password"
                        name="password"
                        onChange={Datafill}
                        placeholder="Password"
                      />
                    </div>
                    <div className="">
                      <button
                        style={{
                          fontFamily: "inherit",
                          fontWeight: "700",
                          backgroundColor: "red",
                          padding: "20px",
                        }}
                        onClick={submit}
                      >
                        Login
                      </button>
                    </div>
                    <div className="form-group">
                      <h6
                        style={{
                          color: "white",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        onClick={toggle}
                      >

                        <hr style={{ backgroundColor: "white", width: "100%", height: "1px" }} />
                        Register Here
                      </h6>
                      <h6 style={{
                        color: "white",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}>
                        <Link to={'/login'}>Admin Login</Link>
                      </h6>
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  //{" "}
                  <div className="col col-sm-offset-1 mb-sm-40">
                    //{" "}
                    <h4
                      className="font-alt"
                      style={{
                        fontFamily: "inherit",
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      Register
                    </h4>
                    // <hr className="divider-w mb-10" />
                    //{" "}
                    <form className="form">
                      //{" "}
                      <div className="form-group">
                        //{" "}
                        <input
                          className="form-control"
                          id="E-mail"
                          type="text"
                          name="email"
                          onChange={datafill2}
                          placeholder="Email"
                        />
                        //{" "}
                      </div>
                      //{" "}
                      <div className="form-group">
                        //{" "}
                        <input
                          className="form-control"
                          id="username"
                          type="text"
                          name="username"
                          onChange={datafill2}
                          placeholder="Username"
                        />
                        //{" "}
                      </div>
                      <div className="form-group">
                        //{" "}
                        <input
                          className="form-control"
                          id="place"
                          type="text"
                          name="place"
                          onChange={datafill2}
                          placeholder="enter your place .."
                        />
                        //{" "}
                      </div>
                      //{" "}
                      <div className="form-group">
                        //{" "}
                        <input
                          className="form-control"
                          id="phone"
                          type="text"
                          name="phone"
                          onChange={datafill2}
                          placeholder="enter phone number ..."
                        />
                        //{" "}
                      </div>
                      // //{" "}
                      <div className="form-group">
                        //{" "}
                        <input
                          className="form-control"
                          id="password"
                          type="password"
                          name="password"
                          onChange={datafill2}
                          placeholder="Password"
                        />
                        //{" "}
                      </div>
                      //{" "}
                      <div className="form-group">
                        //{" "}
                        <input
                          className="form-control"
                          id="re-password"
                          type="password"
                          onChange={datafill2}
                          name="password_confirmation"
                          placeholder="confirm Password"
                        />
                        //{" "}
                      </div>
                      //{" "}
                      <div className="form-group">
                        //{" "}
                        <button onClick={submit2} className="btn btn-block btn-round btn-b">
                          Register
                        </button>
                        //{" "}
                      </div>
                      <hr style={{ backgroundColor: "white", width: "100%", height: "1px" }} />
                      <h6
                        style={{
                          color: "white",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                        onClick={True}
                      >
                        have an account?..............use login..
                      </h6>
                      //{" "}
                    </form>
                    //{" "}
                  </div>
                  //{" "}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}

export default Demo;
