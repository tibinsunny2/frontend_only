import React, { useState, useEffect } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";
import Image from "../images/athirappalli.jpeg";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions";
import "./product.css";
import "stripe";
function Product({ product }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [CartItem, setCartItem] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()

  useEffect(() => {

  }, [])
  const handleAddToCart = (e) => {
    localStorage.setitem("cartitem",)
  };

  return (
    <>
      <div>
        <Link to={`/packageSingle/${product.id}`}>
          <div className="product--card">
            <img
              src={product.attraction}
              alt="Product Shoes"
              className="product--img"
            />
            <h4 id="head">{product.title}</h4>
            <p id="para">
              {product.about.length > 200
                ? product.about.slice(0, 200)
                : product.about}{" "}
              <a style={{ color: "blue" }}>More</a>
            </p>
            {/* <h2>{product.amount}</h2>
          <p>duration:{product.duration}</p>
          <p>Location:{product.location}</p>
          <p>rating:{product.rating}</p>
          <p> No_of_people:{product.no_of_people}</p> */}
            <table>
              <th>
                <h6>Details</h6>
              </th>
              <tbody>
                <tr>
                  <th>Duration</th>
                  <td>{product.duration}</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>{product.location}</td>
                </tr>
                <tr>
                  <th>rating</th>
                  <td>{product.rating}</td>
                </tr>
                {/* <tr>
                  <th>No_of_people</th>
                  <td>{product.no_of_people}</td>
                </tr> */}
                <tr>
                  <th>amount</th>
                  <td>{product.amount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Link>
      </div>
      <Link to={`/bookingpage/${product.id}`}
        style={{
          backgroundColor: "blue",
          padding: "20px",
          borderRadius: "20px",
          color: "white",
          fontSize: "1rem",
          paddingTop: "50%",
        }}
    
      >
        Buy
      </Link>
    </>
  );
}

export default Product;
