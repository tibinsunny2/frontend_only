import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";

import Product from "../components/Product";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "./productscreen.css";
import AOS from "aos";
import Image from "../images/athirappalli.jpeg";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

function Adminpackagemodifications() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const [duplicateTours, setDuplicateTours] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const Accesstoken=localStorage.getItem('key')
    axios.get('list-packages/',{
      headers:{
        'Authorization': `Bearer ${Accesstoken}`,
        'Content-Type': 'application/json',
      }
    })
    .then((res)=>{
      console.log(res.data)
    }).catch(()=>{
      console.log("error")
    })
  }, []);

  function filterBySearch() {
    const tempProducts = duplicateTours.filter((x) =>
      x.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setProducts(tempProducts);
  }

  return (
    <>
      <div className="product--header">
        <div className="product--details">
          <h4 style={{ color: "blue",textDecoration:"underline",fontSize:"40px" }}>Our packages</h4>
          <h1 style={{ fontSize: "58px",color:"red" }}>
            "Be with us we can do wonders for you"
          </h1>
          <p style={{ fontSize: "16px", marginBottom: "15px" ,color:"white",fontWeight:"800"}}>
            "Embark on an adrenaline-fueled journey with our Adventure Getaway
            package! Conquer rugged landscapes, experience heart-pounding
            activities, and create memories that will last a lifetime. Unleash
            your inner adventurer!"
            <br /> Get the most favourite package from the store.
          </p>
          <button className="features-btn">Reserve the Package</button>
        </div>
      </div>
      {/* <div className="container"> */}
        {/* <div> */}
          {/* <input
            type="text"
            className="form-control"
            placeholder="Search Products"
            value={searchKey}
            style={{ marginTop: "30px" }}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
            onKeyUp={filterBySearch}
          /> */}
        {/* </div> */}
      {/* </div> */}

      <div
      id="row"
        className="row justify-content-center mt-5"
        style={{ padding: "50px" }}
      >
        {loading ? (
          <Loader></Loader>
        ) : error.length > 0 ? (
          <Error msg={error}></Error>
        ) : (
          products.map((x) => {
            return (
              <div id="tour-row" className="tour-row" data-aos="flip-down">
                <Product product={x} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Adminpackagemodifications;