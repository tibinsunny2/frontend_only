import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PackageSingle.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function PackageSingle() {
  const { id } = useParams();
  console.log(id);

  const [packageId, setPackageId] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`/package-detail/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("key")}`,
      },
    });
    setPackageId(response.data);

    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-5 pt-3">
        <div className="row mb-5">
          <div className="col-9">
            <h2>
              <b>{packageId.title}</b>
            </h2>
            <div className="imgDiv">
              <Carousel fade>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="First slide" /> */}
                  <img src={packageId.attraction} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Second slide" /> */}
                  <img src={packageId.hotel} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Third slide" /> */}
                  <img src={packageId.activity} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Third slide" /> */}
                  <img src={packageId.destination} alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div>
              <b style={{ fontSize: "1rem" }}>Location:</b> {packageId.location}
            </div>
            <div>
              <b>Rating:</b> {packageId.rating} &#9733;
            </div>
            <p>{packageId.about}</p>
            <div
              style={{
                fontFamily: "sans-serif",
                color: "black",
                backgroundColor: "lightBlue",
                width: "30%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <b>Package Rate:</b> {packageId.amount}
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "1.5rem",
                textDecoration: "underline",
              }}
            >
              Attractions
            </div>
            <img
              src={packageId.attraction}
              alt=""
              width={"200px"}
              height={"200px"}
            />
            <img
              src={packageId.hotel}
              alt=""
              width={"200px"}
              height={"200px"}
            />
            <img
              src={packageId.destination}
              alt=""
              width={"200px"}
              height={"200px"}
            />
            <img
              src={packageId.activity}
              alt=""
              width={"200px"}
              height={"200px"}
            />
          </div>
          <div className="col-3 text-center mt-5 d-flex flex-column justify-content-center ">
            <h5 style={{ textDecoration: "underline" }}>GADGETS</h5>
            <h6>
              <Link to={"/converter"}>Currency Converter</Link>
            </h6>
            <h6>
              <Link to={"/Wheather"}>Weather</Link>
            </h6>
            <h6>
              <Link to={"/journal"}>Global Safety Journal</Link>
            </h6>
            <h6>
              <Link to={"/destinations"}>Destinations</Link>
            </h6>
            <h6>
              <Link to={"/emergency"}>Emergency Services</Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageSingle;
